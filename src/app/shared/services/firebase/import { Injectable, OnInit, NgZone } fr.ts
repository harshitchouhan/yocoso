import { Injectable, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import auth from "firebase/compat/app";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { ToastrService } from "ngx-toastr";
import { CookieService } from "ngx-cookie-service";

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnInit {
  //   public userData: any;
  //   public user: firebase.User;
  public showLoader: boolean = false;
  public userData: any; // Save logged in user data

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth, public router: Router, public ngZone: NgZone, public toster: ToastrService, private cookieService: CookieService) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem("user", JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem("user")!);
      } else {
        localStorage.setItem("user", "null");
        JSON.parse(localStorage.getItem("user")!);
      }
    });
  }

  ngOnInit(): void {
    console.log("localstoregae", localStorage.getItem("user"));
  }

  // sign in function
  SignIn(email, password) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user.emailVerified !== true) {
          this.SetUserData(result.user);
          this.SendVerificationMail();
          this.showLoader = true;
          this.router.navigate(["/dashboard"]);
        } else {
          this.showLoader = false;
          this.ngZone.run(() => {
            this.router.navigate(["/auth/login"]);
          });
        }
      })
      .catch((error) => {
        this.toster.error("You have enter Wrong Email or Password.");
      });
  }

  // main verification function
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((user) => {
        return user.sendEmailVerification();
      })
      .then(() => {
        this.router.navigate(["verify-email-address"]);
      });
  }

  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(["dashboard/default"]);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  ForgotPassword(passwordResetEmail) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert("Password reset email sent, check your inbox.");
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      // localStorage.clear();
      localStorage.removeItem("user");
      // this.cookieService.deleteAll('user', '/auth/login');
      this.router.navigate(["/auth/login"]);
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user != null && user.emailVerified != false ? true : false;
  }
}

import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";
import { NgbdSortableHeader, SortEvent } from "src/app/shared/directives/NgbdSortableHeader";
import { TableService } from "./user-management.service";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.scss"],
})
export class UserManagementComponent implements OnInit {
  public tableItem$: Observable<any[]>;
  total$: Observable<number>;

  public defaultBindingsList = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
    { value: "50", label: "50" },
  ];

  selectedEntries = { value: "20", label: "20" };

  constructor(public service: TableService) {
    this._fetchCustomers();
    this.tableItem$ = service.tableItem$;
    this.total$ = service.total$;
  }

  ngOnInit() {}

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  handleTextChange(e: any) {
    this.service.searchTerm = e.target.value;
  }

  private _fetchCustomers = () => {
    let data = [
      { id: 1000, userType: "Admin", username: "Charissa Richmond", email: "laoreet.lectus@protonmail.net", status: "active" },
      { id: 1001, userType: "Admin", username: "Leroy Reed", email: "duis.sit.amet@yahoo.ca", status: "active" },
      { id: 1002, userType: "Sub Admin", username: "Armand Long", email: "non.lobortis@hotmail.org", status: "inactive" },
      { id: 1003, userType: "Sub Admin", username: "Isadora Mcfadden", email: "ante.dictum@hotmail.couk", status: "inactive" },
      { id: 1004, userType: "Developer", username: "Kellie Newton", email: "nisi@icloud.com", status: "active" },
      { id: 1005, userType: "Developer", username: "Gwendolyn Pate", email: "cursus.purus@aol.couk", status: "active" },
      { id: 1006, userType: "Admin", username: "Shannon Garrison", email: "tempor.diam@google.com", status: "inactive" },
      { id: 1007, userType: "Admin", username: "Hector Kidd", email: "donec.felis.orci@icloud.couk", status: "inactive" },
      { id: 1008, userType: "Sub Admin", username: "Asher Wright", email: "tellus.non.magna@hotmail.ca", status: "active" },
      { id: 1009, userType: "Sub Admin", username: "Reuben Drake", email: "orci.lobortis@outlook.couk", status: "active" },
      { id: 1010, userType: "Developer", username: "Keaton Dudley", email: "eu.sem@google.edu", status: "inactive" },
      { id: 1011, userType: "Developer", username: "Brenden Lopez", email: "eu.placerat.eget@google.org", status: "inactive" },
      { id: 1012, userType: "Admin", username: "Baxter Anderson", email: "sem.consequat@icloud.com", status: "active" },
      { id: 1013, userType: "Admin", username: "Hyatt Drake", email: "mauris.aliquam@yahoo.com", status: "active" },
      { id: 1014, userType: "Sub Admin", username: "Damon Williams", email: "ut.pellentesque@aol.ca", status: "inactive" },
      { id: 1015, userType: "Sub Admin", username: "Barrett Merritt", email: "bibendum.ullamcorper@outlook.com", status: "inactive" },
      { id: 1016, userType: "Developer", username: "Hedy Pace", email: "amet@icloud.ca", status: "active" },
      { id: 1017, userType: "Developer", username: "Ulric Kinney", email: "eu.placerat@outlook.org", status: "active" },
      { id: 1018, userType: "Admin", username: "Vladimir Lowery", email: "malesuada.fames@hotmail.com", status: "inactive" },
      { id: 1019, userType: "Admin", username: "Byron Bennett", email: "ut.ipsum.ac@outlook.couk", status: "inactive" },
      { id: 1020, userType: "Sub Admin", username: "Orlando Knapp", email: "sociis@outlook.edu", status: "active" },
      { id: 1021, userType: "Sub Admin", username: "Stone Holcomb", email: "laoreet@yahoo.com", status: "active" },
      { id: 1022, userType: "Developer", username: "Henry Russo", email: "sem.semper@google.com", status: "inactive" },
      { id: 1023, userType: "Developer", username: "Fritz Mcbride", email: "in@aol.couk", status: "inactive" },
      { id: 1024, userType: "Admin", username: "Bethany Edwards", email: "lorem.auctor@outlook.org", status: "active" },
      { id: 1025, userType: "Admin", username: "Joel Simon", email: "vivamus@google.edu", status: "active" },
      { id: 1026, userType: "Sub Admin", username: "Vaughan Bruce", email: "est.vitae.sodales@google.edu", status: "inactive" },
      { id: 1027, userType: "Sub Admin", username: "Salvador Heath", email: "sociosqu.ad@icloud.edu", status: "inactive" },
      { id: 1028, userType: "Developer", username: "Russell Todd", email: "vitae.posuere.at@hotmail.com", status: "active" },
      { id: 1029, userType: "Developer", username: "Janna Estrada", email: "faucibus.morbi@yahoo.net", status: "active" },
      { id: 1030, userType: "Admin", username: "Derek Ayala", email: "posuere@aol.couk", status: "inactive" },
      { id: 1031, userType: "Admin", username: "Nyssa Dejesus", email: "ante.dictum@hotmail.com", status: "inactive" },
      { id: 1032, userType: "Sub Admin", username: "Aurelia Bruce", email: "etiam.bibendum@protonmail.org", status: "active" },
      { id: 1033, userType: "Sub Admin", username: "Indigo Bradford", email: "a.facilisis@aol.edu", status: "active" },
      { id: 1034, userType: "Developer", username: "Rhonda Bender", email: "suscipit.est.ac@hotmail.edu", status: "inactive" },
      { id: 1035, userType: "Developer", username: "Athena Espinoza", email: "ut.nisi.a@yahoo.net", status: "inactive" },
      { id: 1036, userType: "Admin", username: "Hamish Hancock", email: "amet.ultricies@google.org", status: "active" },
      { id: 1037, userType: "Admin", username: "Xyla Kemp", email: "aenean.sed.pede@hotmail.net", status: "active" },
      { id: 1038, userType: "Sub Admin", username: "Brielle Johns", email: "sed.tortor@hotmail.org", status: "inactive" },
      { id: 1039, userType: "Sub Admin", username: "Jennifer Beasley", email: "ligula.nullam@icloud.couk", status: "inactive" },
      { id: 1040, userType: "Developer", username: "Cally Nieves", email: "malesuada.id@protonmail.net", status: "active" },
      { id: 1041, userType: "Developer", username: "Linda Roberson", email: "purus@aol.couk", status: "active" },
      { id: 1042, userType: "Admin", username: "Dillon Doyle", email: "varius.ultrices.mauris@aol.couk", status: "inactive" },
      { id: 1043, userType: "Admin", username: "Xenos Savage", email: "dui@google.net", status: "inactive" },
      { id: 1044, userType: "Sub Admin", username: "Chava Middleton", email: "vestibulum.nec.euismod@protonmail.edu", status: "active" },
      { id: 1045, userType: "Sub Admin", username: "Clio Hogan", email: "urna@outlook.edu", status: "active" },
      { id: 1046, userType: "Developer", username: "Wendy Hubbard", email: "adipiscing.lacus@protonmail.net", status: "inactive" },
      { id: 1047, userType: "Developer", username: "Joel Dotson", email: "curae.phasellus@google.com", status: "inactive" },
      { id: 1048, userType: "Admin", username: "Celeste Knowles", email: "eu.ligula@icloud.org", status: "active" },
      { id: 1049, userType: "Admin", username: "Cameron Mercado", email: "neque.in.ornare@icloud.ca", status: "active" },
      { id: 1050, userType: "Sub Admin", username: "Jasper Winters", email: "suspendisse.eleifend@aol.edu", status: "inactive" },
      { id: 1051, userType: "Sub Admin", username: "Caesar Vance", email: "a.facilisis@google.ca", status: "inactive" },
      { id: 1052, userType: "Developer", username: "Dawn Stokes", email: "lorem.ac.risus@outlook.couk", status: "active" },
      { id: 1053, userType: "Developer", username: "Anika Barlow", email: "dis.parturient.montes@aol.ca", status: "active" },
      { id: 1054, userType: "Admin", username: "Ryder Tate", email: "tempus.mauris.erat@aol.org", status: "inactive" },
      { id: 1055, userType: "Admin", username: "Brianna Boyle", email: "amet.risus.donec@hotmail.org", status: "inactive" },
      { id: 1056, userType: "Sub Admin", username: "Fredericka Dejesus", email: "vestibulum.lorem.sit@protonmail.com", status: "active" },
      { id: 1057, userType: "Sub Admin", username: "MacKensie Cunningham", email: "laoreet.libero@hotmail.com", status: "active" },
      { id: 1058, userType: "Developer", username: "Lila Boyle", email: "urna.justo.faucibus@protonmail.ca", status: "inactive" },
      { id: 1059, userType: "Developer", username: "Kasimir Dominguez", email: "mollis@google.net", status: "inactive" },
      { id: 1060, userType: "Admin", username: "Xander Guzman", email: "nec@outlook.org", status: "active" },
      { id: 1061, userType: "Admin", username: "Brittany Cox", email: "nunc.id.enim@icloud.org", status: "active" },
      { id: 1062, userType: "Sub Admin", username: "Doris Franks", email: "eros.proin@aol.com", status: "inactive" },
      { id: 1063, userType: "Sub Admin", username: "Cain Skinner", email: "consequat.dolor@outlook.org", status: "inactive" },
      { id: 1064, userType: "Developer", username: "Roanna Reynolds", email: "et.nunc@protonmail.edu", status: "active" },
      { id: 1065, userType: "Developer", username: "Ruth Ashley", email: "ut.odio@yahoo.com", status: "active" },
      { id: 1066, userType: "Admin", username: "Guy Joyce", email: "non.sapien@aol.couk", status: "inactive" },
      { id: 1067, userType: "Admin", username: "Keith Gibson", email: "velit.dui@hotmail.org", status: "inactive" },
      { id: 1068, userType: "Sub Admin", username: "Hermione Moreno", email: "lacus.nulla.tincidunt@yahoo.couk", status: "active" },
      { id: 1069, userType: "Sub Admin", username: "Dillon Pollard", email: "nisi.sem@aol.edu", status: "active" },
      { id: 1070, userType: "Developer", username: "Clark Albert", email: "iaculis.nec@google.ca", status: "inactive" },
      { id: 1071, userType: "Developer", username: "Ulysses Miranda", email: "orci.lacus@google.org", status: "inactive" },
      { id: 1072, userType: "Admin", username: "Willow Cohen", email: "libero.lacus@google.edu", status: "active" },
      { id: 1073, userType: "Admin", username: "Daria Zamora", email: "et@yahoo.org", status: "active" },
      { id: 1074, userType: "Sub Admin", username: "Shaeleigh Combs", email: "lectus@google.ca", status: "inactive" },
      { id: 1075, userType: "Sub Admin", username: "Amir Stein", email: "ipsum.dolor@protonmail.org", status: "inactive" },
      { id: 1076, userType: "Developer", username: "Ralph Richardson", email: "dictum.eu@icloud.couk", status: "active" },
      { id: 1077, userType: "Developer", username: "Deacon Wooten", email: "dolor.dapibus.gravida@yahoo.edu", status: "active" },
      { id: 1078, userType: "Admin", username: "Galvin Wyatt", email: "a@google.edu", status: "inactive" },
      { id: 1079, userType: "Admin", username: "Neil Reilly", email: "ut@protonmail.net", status: "inactive" },
      { id: 1080, userType: "Sub Admin", username: "Adrienne Gould", email: "ligula.eu.enim@yahoo.edu", status: "active" },
      { id: 1081, userType: "Sub Admin", username: "Georgia Gould", email: "lectus@aol.ca", status: "active" },
      { id: 1082, userType: "Developer", username: "Velma Miranda", email: "nulla.interdum.curabitur@hotmail.couk", status: "inactive" },
      { id: 1083, userType: "Developer", username: "Xaviera Preston", email: "tincidunt.adipiscing@icloud.couk", status: "inactive" },
      { id: 1084, userType: "Admin", username: "Joan Workman", email: "phasellus.dolor@aol.edu", status: "active" },
      { id: 1085, userType: "Admin", username: "Ishmael Morrison", email: "vehicula.aliquet.libero@aol.org", status: "active" },
      { id: 1086, userType: "Sub Admin", username: "Brady Mcmahon", email: "neque@hotmail.org", status: "inactive" },
      { id: 1087, userType: "Sub Admin", username: "Amena Reyes", email: "quis.turpis.vitae@google.couk", status: "inactive" },
      { id: 1088, userType: "Developer", username: "Bryar Yang", email: "nunc@protonmail.net", status: "active" },
      { id: 1089, userType: "Developer", username: "Audra Bryan", email: "consectetuer.ipsum@outlook.org", status: "active" },
      { id: 1090, userType: "Admin", username: "Acton Vang", email: "mollis.non.cursus@google.org", status: "inactive" },
      { id: 1091, userType: "Admin", username: "Gray Cohen", email: "sed.eget.lacus@icloud.couk", status: "inactive" },
      { id: 1092, userType: "Sub Admin", username: "Silas Donaldson", email: "etiam.gravida@yahoo.net", status: "active" },
      { id: 1093, userType: "Sub Admin", username: "Emery Ray", email: "amet.metus@outlook.ca", status: "active" },
      { id: 1094, userType: "Developer", username: "Ulysses Mckenzie", email: "mattis.cras@protonmail.ca", status: "inactive" },
      { id: 1095, userType: "Developer", username: "Judah Tyson", email: "ornare.facilisis@aol.com", status: "inactive" },
      { id: 1096, userType: "Admin", username: "Maggie Rosales", email: "donec.sollicitudin@yahoo.net", status: "active" },
      { id: 1097, userType: "Admin", username: "Ina Ross", email: "est@outlook.edu", status: "active" },
      { id: 1098, userType: "Sub Admin", username: "Allistair Vincent", email: "est.nunc@icloud.com", status: "inactive" },
      { id: 1099, userType: "Sub Admin", username: "Ferris Harvey", email: "nec.cursus@aol.couk", status: "inactive" },
    ];

    this.service.initialData = data;
  };
}

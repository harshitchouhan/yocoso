import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorMessagesComponent } from "./errorMessage.component";

@NgModule({
  declarations: [ErrorMessagesComponent],
  imports: [CommonModule],
  exports: [ErrorMessagesComponent],
})
export class ErrorMessageModule {}

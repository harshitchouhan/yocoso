import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgSelectModule } from "@ng-select/ng-select";

import { SharedModule } from "./../../shared/shared.module";
import { TransactionListComponent } from "./transactions-list/transactions-list.component";
import { TransactionsRoutingModule } from "./transactions-routing.module";

@NgModule({
  declarations: [TransactionListComponent],
  imports: [CommonModule, NgSelectModule, SharedModule, TransactionsRoutingModule],
  exports: [],
})
export class TransactionsModule {}

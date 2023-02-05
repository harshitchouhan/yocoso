import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { Observable } from "rxjs";
import { PACKAGESDB, PackagesDB } from "src/app/shared/data/tables/packages";

import { NgbdSortableHeader, SortEvent } from "src/app/shared/directives/NgbdSortableHeader";
import { TableService } from "src/app/shared/services/table.service";

@Component({
  selector: "app-packages-list",
  templateUrl: "./packages-list.component.html",
  styleUrls: ["./packages-list.component.scss"],
})
export class PackagesListComponent implements OnInit {
  public tableItem$: Observable<PackagesDB[]>;
  total$: Observable<number>;

  public defaultBindingsList = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
    { value: "50", label: "50" },
  ];

  public defaultBindingsList2 = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  selectedEntries = { value: "20", label: "20" };

  constructor(public service: TableService) {
    this.tableItem$ = service.tableItem$;
    this.total$ = service.total$;
    this.service.setUserData(PACKAGESDB);
  }

  ngOnInit() {}

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({ column, direction }: SortEvent) {
    console.log(column, direction);
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  onShowEntriesChange(event) {
    this.service.pageSize = event.target.value;
    this.service.page = 1;
  }
}

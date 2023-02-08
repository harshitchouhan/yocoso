import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";
import { NgbdSortableHeader, SortEvent } from "src/app/shared/directives/NgbdSortableHeader";
import { TableService } from "./service-management.service";

@Component({
  selector: "app-service-management",
  templateUrl: "./service-management.component.html",
  styleUrls: ["./service-management.component.scss"],
})
export class ServiceManagementComponent implements OnInit {
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
      {
        id: 1000,
        status: "active",
        name: "Shop to Shop",
      },
      {
        id: 1001,
        status: "active",
        name: "Door 2 Door - Next Day",
      },
      {
        id: 1002,
        status: "inactive",
        name: "Drop Off at Shop",
      },
      {
        id: 1003,
        status: "active",
        name: "Door 2 Door - By 12",
      },
    ];

    this.service.initialData = data;
  };
}

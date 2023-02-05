import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";
import { NgbdSortableHeader, SortEvent } from "src/app/shared/directives/NgbdSortableHeader";
import { TableService } from "./route-management.service";

@Component({
  selector: "app-route-management",
  templateUrl: "./route-management.component.html",
  styleUrls: ["./route-management.component.scss"],
})
export class RouteManagementComponent implements OnInit {
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
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
      {
        id: "123",
        title: "Pali",
        postalCodes: ["123", "456", "789"],
        status: "active",
      },
      {
        id: "123",
        title: "Jodhpur",
        postalCodes: ["123456", "456789", "789123"],
        status: "active",
      },
    ];

    this.service.initialData = data;
  };
}

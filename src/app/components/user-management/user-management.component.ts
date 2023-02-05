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
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
      {
        id: "123",
        userType: "Admin",
        username: "Admin@123",
        email: "Admin@gmail.com",
        status: "active",
      },
      {
        id: "456",
        userType: "Sub Admin",
        username: "SubAdmin@123",
        email: "SubAdmin@gmail.com",
        status: "active",
      },
      {
        id: "789",
        userType: "Developer",
        username: "Developer@123",
        email: "Developer@gmail.com",
        status: "active",
      },
    ];

    this.service.initialData = data;
  };
}

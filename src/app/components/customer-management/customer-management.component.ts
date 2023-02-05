import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { Observable } from "rxjs";
import { NgbdSortableHeader, SortEvent } from "src/app/shared/directives/NgbdSortableHeader";
import { TableService } from "./customer-management.service";

@Component({
  selector: "app-customer-management",
  templateUrl: "./customer-management.component.html",
  styleUrls: ["./customer-management.component.scss"],
})
export class CustomerManagementComponent implements OnInit {
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
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "7357733398",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
      {
        id: "123",
        name: "Mr Harshit Chouhan",
        email: "harshitsinghchouhan2018@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "05 Feb, 2023",
      },
      {
        id: "456",
        name: "Mr Bhavik Rathore",
        email: "bhavikrathore786@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "01 Feb, 2023",
      },
      {
        id: "789",
        name: "Mr Vikas Mandora",
        email: "vikarmandora@gmail.com",
        mobileNo: "8107136147",
        status: "active",
        createdAt: "28 Jan, 2022",
      },
    ];

    this.service.initialData = data;
  };
}

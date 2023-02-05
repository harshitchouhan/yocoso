import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";
import { NgbdSortableHeader, SortEvent } from "src/app/shared/directives/NgbdSortableHeader";
import { TableService } from "./insurance-management.service";

@Component({
  selector: "app-insurance-management",
  templateUrl: "./insurance-management.component.html",
  styleUrls: ["./insurance-management.component.scss"],
})
export class InsuranceManagementComponent implements OnInit {
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
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
      {
        id: "123",
        title: "Premium Insurance",
        from: "1$",
        to: "100$",
        charges: "75$",
        status: "active",
      },
      {
        id: "123",
        title: "Gold Insurance",
        from: "100$",
        to: "200$",
        charges: "110$",
        status: "active",
      },
    ];

    this.service.initialData = data;
  };
}

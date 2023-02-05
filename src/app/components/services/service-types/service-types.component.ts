import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";
import { NgbdSortableHeader, SortEvent } from "src/app/shared/directives/NgbdSortableHeader";
import { TableService } from "./service-types.service";

@Component({
  selector: "app-service-types",
  templateUrl: "./service-types.component.html",
  styleUrls: ["./service-types.component.scss"],
})
export class ServiceTypesComponent implements OnInit {
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
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Door",
        status: "active",
      },
      {
        id: "123",
        name: "Door to Store",
        status: "active",
      },
    ];

    this.service.initialData = data;
  };
}

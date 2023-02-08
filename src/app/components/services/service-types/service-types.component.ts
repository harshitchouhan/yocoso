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
        id: 1000,
        status: "active",
        name: "Basil Wilkerson",
      },
      {
        id: 1001,
        status: "active",
        name: "Jakeem Joyce",
      },
      {
        id: 1002,
        status: "inactive",
        name: "Alexander Travis",
      },
      {
        id: 1003,
        status: "inactive",
        name: "Jason Elliott",
      },
      {
        id: 1004,
        status: "active",
        name: "Marvin Bailey",
      },
      {
        id: 1005,
        status: "active",
        name: "Malik Mccarty",
      },
      {
        id: 1006,
        status: "inactive",
        name: "Ishmael Flynn",
      },
      {
        id: 1007,
        status: "inactive",
        name: "Abdul Hays",
      },
      {
        id: 1008,
        status: "active",
        name: "Joelle Hopper",
      },
      {
        id: 1009,
        status: "active",
        name: "Nissim Macdonald",
      },
      {
        id: 1010,
        status: "inactive",
        name: "Quinn Hardin",
      },
      {
        id: 1011,
        status: "inactive",
        name: "Shannon Holland",
      },
      {
        id: 1012,
        status: "active",
        name: "Lucas Ferguson",
      },
      {
        id: 1013,
        status: "active",
        name: "Kirk Aguilar",
      },
      {
        id: 1014,
        status: "inactive",
        name: "Xena Mcintyre",
      },
      {
        id: 1015,
        status: "inactive",
        name: "Ulric Patterson",
      },
      {
        id: 1016,
        status: "active",
        name: "Aristotle Talley",
      },
      {
        id: 1017,
        status: "active",
        name: "Garth Gay",
      },
      {
        id: 1018,
        status: "inactive",
        name: "Britanney Mcgowan",
      },
      {
        id: 1019,
        status: "inactive",
        name: "Ayanna Gould",
      },
    ];

    this.service.initialData = data;
  };
}

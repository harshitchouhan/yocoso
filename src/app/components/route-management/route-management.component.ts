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
      { id: 1000, status: "active", title: "Whyalla", postalCodes: "7635" },
      { id: 1001, status: "active", title: "Horsham", postalCodes: "2731" },
      { id: 1002, status: "inactive", title: "Bathurst", postalCodes: "4377" },
      { id: 1003, status: "inactive", title: "Caloundra", postalCodes: "8368" },
      { id: 1004, status: "active", title: "Devonport", postalCodes: "9828" },
      { id: 1005, status: "active", title: "Frankston", postalCodes: "5712" },
      { id: 1006, status: "inactive", title: "Newcastle", postalCodes: "6146" },
      { id: 1007, status: "inactive", title: "South Perth", postalCodes: "7051" },
      { id: 1008, status: "active", title: "Rockhampton", postalCodes: "2565" },
      { id: 1009, status: "active", title: "Palmerston", postalCodes: "3811" },
      { id: 1010, status: "inactive", title: "Gladstone", postalCodes: "4673" },
      { id: 1011, status: "inactive", title: "Canberra", postalCodes: "5716" },
      { id: 1012, status: "active", title: "Orange", postalCodes: "1159" },
      { id: 1013, status: "active", title: "Cessnock", postalCodes: "5521" },
      { id: 1014, status: "inactive", title: "Belgrave", postalCodes: "4011" },
      { id: 1015, status: "inactive", title: "Palmerston", postalCodes: "5259" },
      { id: 1016, status: "active", title: "Benalla", postalCodes: "7766" },
      { id: 1017, status: "active", title: "Burnie", postalCodes: "4516" },
      { id: 1018, status: "inactive", title: "Palmerston", postalCodes: "3656" },
      { id: 1019, status: "inactive", title: "Hamilton", postalCodes: "7752" },
      { id: 1020, status: "active", title: "Goulburn", postalCodes: "5854" },
      { id: 1021, status: "active", title: "Blue Mountains", postalCodes: "1451" },
      { id: 1022, status: "inactive", title: "Canberra", postalCodes: "2339" },
      { id: 1023, status: "inactive", title: "Bendigo", postalCodes: "8895" },
      { id: 1024, status: "active", title: "Mildura", postalCodes: "5356" },
      { id: 1025, status: "active", title: "Mandurah", postalCodes: "4895" },
      { id: 1026, status: "inactive", title: "Devonport", postalCodes: "2822" },
      { id: 1027, status: "inactive", title: "Hervey Bay", postalCodes: "6922" },
      { id: 1028, status: "active", title: "Albury", postalCodes: "5731" },
      { id: 1029, status: "active", title: "Port Pirie", postalCodes: "4446" },
      { id: 1030, status: "inactive", title: "Stirling", postalCodes: "4695" },
      { id: 1031, status: "inactive", title: "Toowoomba", postalCodes: "6421" },
      { id: 1032, status: "active", title: "Fremantle", postalCodes: "4177" },
      { id: 1033, status: "active", title: "Port Augusta", postalCodes: "2121" },
      { id: 1034, status: "inactive", title: "Canberra", postalCodes: "7346" },
      { id: 1035, status: "inactive", title: "Campbelltown", postalCodes: "3365" },
      { id: 1036, status: "active", title: "Palmerston", postalCodes: "5191" },
      { id: 1037, status: "active", title: "Port Augusta", postalCodes: "8135" },
      { id: 1038, status: "inactive", title: "Rockingham", postalCodes: "3535" },
      { id: 1039, status: "inactive", title: "Frankston", postalCodes: "7445" },
      { id: 1040, status: "active", title: "Murray Bridge", postalCodes: "8032" },
      { id: 1041, status: "active", title: "Whyalla", postalCodes: "5152" },
      { id: 1042, status: "inactive", title: "Adelaide", postalCodes: "7238" },
      { id: 1043, status: "inactive", title: "Bayswater", postalCodes: "5311" },
      { id: 1044, status: "active", title: "Albany", postalCodes: "7876" },
      { id: 1045, status: "active", title: "Wollongong", postalCodes: "2756" },
      { id: 1046, status: "inactive", title: "Canberra", postalCodes: "6901" },
      { id: 1047, status: "inactive", title: "South Perth", postalCodes: "5153" },
      { id: 1048, status: "active", title: "Sydney", postalCodes: "8241" },
      { id: 1049, status: "active", title: "Port Augusta", postalCodes: "2432" },
      { id: 1050, status: "inactive", title: "Port Augusta", postalCodes: "6278" },
      { id: 1051, status: "inactive", title: "Port Lincoln", postalCodes: "3784" },
      { id: 1052, status: "active", title: "Canberra", postalCodes: "6344" },
      { id: 1053, status: "active", title: "Devonport", postalCodes: "4114" },
      { id: 1054, status: "inactive", title: "Gladstone", postalCodes: "9360" },
      { id: 1055, status: "inactive", title: "Whyalla", postalCodes: "6318" },
      { id: 1056, status: "active", title: "Mount Gambier", postalCodes: "8743" },
      { id: 1057, status: "active", title: "Bundaberg", postalCodes: "8168" },
      { id: 1058, status: "inactive", title: "Melbourne", postalCodes: "9857" },
      { id: 1059, status: "inactive", title: "Burnie", postalCodes: "9111" },
      { id: 1060, status: "active", title: "Gladstone", postalCodes: "7346" },
      { id: 1061, status: "active", title: "Bairnsdale", postalCodes: "8476" },
      { id: 1062, status: "inactive", title: "Mackay", postalCodes: "3805" },
      { id: 1063, status: "inactive", title: "Burnie", postalCodes: "2670" },
      { id: 1064, status: "active", title: "Murray Bridge", postalCodes: "5474" },
      { id: 1065, status: "active", title: "Darwin", postalCodes: "8767" },
      { id: 1066, status: "inactive", title: "Perth", postalCodes: "8250" },
      { id: 1067, status: "inactive", title: "Canberra", postalCodes: "5269" },
      { id: 1068, status: "active", title: "Darwin", postalCodes: "8752" },
      { id: 1069, status: "active", title: "Greater Hobart", postalCodes: "4715" },
      { id: 1070, status: "inactive", title: "Canberra", postalCodes: "6662" },
      { id: 1071, status: "inactive", title: "Cessnock", postalCodes: "7727" },
      { id: 1072, status: "active", title: "Armadale", postalCodes: "2182" },
      { id: 1073, status: "active", title: "Mildura", postalCodes: "7478" },
      { id: 1074, status: "inactive", title: "Mount Gambier", postalCodes: "8486" },
      { id: 1075, status: "inactive", title: "Newcastle", postalCodes: "6551" },
      { id: 1076, status: "active", title: "Mount Isa", postalCodes: "4233" },
      { id: 1077, status: "active", title: "Liverpool", postalCodes: "7235" },
      { id: 1078, status: "inactive", title: "Albury", postalCodes: "2814" },
      { id: 1079, status: "inactive", title: "Bayswater", postalCodes: "2362" },
      { id: 1080, status: "active", title: "Fremantle", postalCodes: "4912" },
      { id: 1081, status: "active", title: "Canberra", postalCodes: "4581" },
      { id: 1082, status: "inactive", title: "Lithgow", postalCodes: "7233" },
      { id: 1083, status: "inactive", title: "Victor Harbor", postalCodes: "3285" },
      { id: 1084, status: "active", title: "Canning", postalCodes: "9535" },
      { id: 1085, status: "active", title: "Armadale", postalCodes: "5066" },
      { id: 1086, status: "inactive", title: "Redcliffe", postalCodes: "8731" },
      { id: 1087, status: "inactive", title: "Devonport", postalCodes: "2604" },
      { id: 1088, status: "active", title: "Cockburn", postalCodes: "4721" },
      { id: 1089, status: "active", title: "Burnie", postalCodes: "3753" },
      { id: 1090, status: "inactive", title: "Canberra", postalCodes: "5592" },
      { id: 1091, status: "inactive", title: "Joondalup", postalCodes: "8536" },
      { id: 1092, status: "active", title: "Gosnells", postalCodes: "1381" },
      { id: 1093, status: "active", title: "Palmerston", postalCodes: "7323" },
      { id: 1094, status: "inactive", title: "Port Augusta", postalCodes: "7086" },
      { id: 1095, status: "inactive", title: "Darwin", postalCodes: "5102" },
      { id: 1096, status: "active", title: "Queanbeyan", postalCodes: "4024" },
      { id: 1097, status: "active", title: "Shepparton", postalCodes: "3733" },
      { id: 1098, status: "inactive", title: "Rockhampton", postalCodes: "6637" },
      { id: 1099, status: "inactive", title: "Canberra", postalCodes: "8241" },
    ];

    this.service.initialData = data;
  };
}

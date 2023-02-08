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
      { name: "Ramona Merritt", mobileNo: "(06) 7875 7553", email: "interdum@protonmail.edu", id: 1000, status: "active", createdAt: "Aug 27, 2023" },
      { name: "Maile Mcdonald", mobileNo: "(08) 3382 6521", email: "mi@icloud.edu", id: 1001, status: "active", createdAt: "Mar 22, 2023" },
      { name: "Davis Norman", mobileNo: "(02) 7544 2416", email: "gravida.mauris@protonmail.couk", id: 1002, status: "inactive", createdAt: "Oct 30, 2023" },
      { name: "Wyatt Dixon", mobileNo: "(01) 8056 4685", email: "etiam.laoreet@hotmail.ca", id: 1003, status: "inactive", createdAt: "Dec 14, 2022" },
      { name: "TaShya Barry", mobileNo: "(08) 2972 3003", email: "magna@icloud.couk", id: 1004, status: "active", createdAt: "Nov 13, 2022" },
      { name: "Vivien Dale", mobileNo: "(09) 9918 2261", email: "in.felis@google.com", id: 1005, status: "active", createdAt: "Apr 26, 2023" },
      { name: "Christen Landry", mobileNo: "(02) 7782 5308", email: "et@aol.edu", id: 1006, status: "inactive", createdAt: "Jun 12, 2022" },
      { name: "Amir Kane", mobileNo: "(05) 5842 1253", email: "pellentesque.ut@outlook.couk", id: 1007, status: "inactive", createdAt: "Sep 17, 2022" },
      { name: "Evan Bruce", mobileNo: "(04) 1271 5766", email: "auctor@protonmail.org", id: 1008, status: "active", createdAt: "Jun 29, 2023" },
      { name: "Dominique Mccoy", mobileNo: "(07) 5468 6225", email: "dictum.eleifend@hotmail.com", id: 1009, status: "active", createdAt: "Apr 7, 2022" },
      { name: "Brandon Grant", mobileNo: "(05) 3335 8773", email: "nam.nulla@protonmail.couk", id: 1010, status: "inactive", createdAt: "Oct 31, 2023" },
      { name: "Matthew Martinez", mobileNo: "(08) 2456 1569", email: "vitae.risus@hotmail.ca", id: 1011, status: "inactive", createdAt: "May 1, 2023" },
      { name: "Daniel Foley", mobileNo: "(03) 9508 2818", email: "laoreet.lectus.quis@protonmail.edu", id: 1012, status: "active", createdAt: "May 18, 2022" },
      { name: "Brett Mcclain", mobileNo: "(04) 7437 7808", email: "nulla@icloud.edu", id: 1013, status: "active", createdAt: "Oct 17, 2023" },
      { name: "Chaney Nunez", mobileNo: "(05) 0626 1727", email: "ultrices@google.com", id: 1014, status: "inactive", createdAt: "Jul 14, 2023" },
      { name: "Mariko Parker", mobileNo: "(01) 6837 6452", email: "nec@google.edu", id: 1015, status: "inactive", createdAt: "Jun 13, 2022" },
      { name: "Wendy Kaufman", mobileNo: "(08) 4877 1526", email: "eu.erat.semper@protonmail.com", id: 1016, status: "active", createdAt: "May 3, 2023" },
      { name: "Silas Hansen", mobileNo: "(02) 1163 8208", email: "molestie.pharetra@google.org", id: 1017, status: "active", createdAt: "May 29, 2022" },
      { name: "Dale Williamson", mobileNo: "(08) 2854 3042", email: "euismod.ac.fermentum@protonmail.edu", id: 1018, status: "inactive", createdAt: "Mar 4, 2022" },
      { name: "Kevyn Ortiz", mobileNo: "(08) 8857 1410", email: "arcu.vestibulum@google.net", id: 1019, status: "inactive", createdAt: "Oct 30, 2022" },
      { name: "Lucius Pittman", mobileNo: "(03) 2621 7291", email: "nisl.elementum@icloud.org", id: 1020, status: "active", createdAt: "May 1, 2022" },
      { name: "Tamara Jones", mobileNo: "(09) 4938 6555", email: "auctor.nunc@icloud.couk", id: 1021, status: "active", createdAt: "Jun 3, 2023" },
      { name: "Brock Calderon", mobileNo: "(09) 8544 4635", email: "mattis.integer@hotmail.com", id: 1022, status: "inactive", createdAt: "Aug 9, 2022" },
      { name: "Garrett Benjamin", mobileNo: "(01) 5378 0142", email: "nulla@yahoo.edu", id: 1023, status: "inactive", createdAt: "May 9, 2022" },
      { name: "Alana Maldonado", mobileNo: "(05) 4153 0703", email: "cubilia.curae.phasellus@protonmail.org", id: 1024, status: "active", createdAt: "Apr 11, 2022" },
      { name: "Zia Leblanc", mobileNo: "(05) 0111 7386", email: "risus.varius.orci@google.ca", id: 1025, status: "active", createdAt: "May 13, 2023" },
      { name: "Dorothy Hinton", mobileNo: "(09) 6146 2708", email: "lectus@protonmail.com", id: 1026, status: "inactive", createdAt: "Jun 2, 2022" },
      { name: "Inez Barry", mobileNo: "(05) 6529 6176", email: "mauris.sapien.cursus@yahoo.com", id: 1027, status: "inactive", createdAt: "Feb 27, 2022" },
      { name: "Aaron Mcbride", mobileNo: "(01) 8317 8668", email: "neque.venenatis.lacus@outlook.ca", id: 1028, status: "active", createdAt: "Mar 25, 2022" },
      { name: "Magee Curry", mobileNo: "(05) 2223 7939", email: "amet.consectetuer@icloud.edu", id: 1029, status: "active", createdAt: "Mar 18, 2022" },
      { name: "Giacomo Carter", mobileNo: "(07) 7784 3874", email: "ipsum.porta@google.edu", id: 1030, status: "inactive", createdAt: "Feb 22, 2023" },
      { name: "Buffy Rice", mobileNo: "(01) 9109 2591", email: "in.hendrerit@icloud.ca", id: 1031, status: "inactive", createdAt: "Oct 19, 2022" },
      { name: "Nero Calhoun", mobileNo: "(03) 8667 7548", email: "risus.donec@icloud.edu", id: 1032, status: "active", createdAt: "Nov 17, 2023" },
      { name: "Brian Bentley", mobileNo: "(02) 2487 9517", email: "donec.elementum@protonmail.edu", id: 1033, status: "active", createdAt: "May 6, 2023" },
      { name: "Jaden Mann", mobileNo: "(06) 5845 0533", email: "ac.libero@outlook.edu", id: 1034, status: "inactive", createdAt: "Aug 25, 2023" },
      { name: "Helen Chaney", mobileNo: "(06) 8536 1624", email: "ornare@yahoo.couk", id: 1035, status: "inactive", createdAt: "Nov 29, 2022" },
      { name: "Deanna Hernandez", mobileNo: "(06) 6518 4343", email: "iaculis.lacus.pede@aol.ca", id: 1036, status: "active", createdAt: "Jan 31, 2024" },
      { name: "Herman Frye", mobileNo: "(08) 5579 7745", email: "pharetra.nibh@aol.net", id: 1037, status: "active", createdAt: "Jul 23, 2023" },
      { name: "Emerald Bush", mobileNo: "(06) 4700 1025", email: "non.nisi@yahoo.edu", id: 1038, status: "inactive", createdAt: "Dec 28, 2022" },
      { name: "Kaseem Hicks", mobileNo: "(06) 8313 8219", email: "diam.pellentesque@google.ca", id: 1039, status: "inactive", createdAt: "Aug 3, 2022" },
      { name: "Kareem Stewart", mobileNo: "(04) 3078 0211", email: "sit.amet@icloud.com", id: 1040, status: "active", createdAt: "Apr 18, 2022" },
      { name: "Paul Stark", mobileNo: "(07) 5427 8834", email: "a.enim.suspendisse@protonmail.couk", id: 1041, status: "active", createdAt: "Apr 9, 2022" },
      { name: "Anthony Patel", mobileNo: "(05) 2327 3296", email: "quam.quis.diam@aol.com", id: 1042, status: "inactive", createdAt: "Sep 25, 2022" },
      { name: "Yvette Barry", mobileNo: "(08) 2653 2244", email: "ut@yahoo.net", id: 1043, status: "inactive", createdAt: "Sep 6, 2023" },
      { name: "Rhona Berg", mobileNo: "(03) 6613 4120", email: "luctus.vulputate@outlook.ca", id: 1044, status: "active", createdAt: "Apr 20, 2023" },
      { name: "Barclay Blackwell", mobileNo: "(07) 2233 9333", email: "pellentesque.a@yahoo.edu", id: 1045, status: "active", createdAt: "Dec 11, 2022" },
      { name: "Uriah Witt", mobileNo: "(04) 7154 4408", email: "ligula.tortor@aol.com", id: 1046, status: "inactive", createdAt: "Jun 16, 2023" },
      { name: "Deacon Patterson", mobileNo: "(09) 2866 2444", email: "pellentesque.habitant.morbi@icloud.net", id: 1047, status: "inactive", createdAt: "Feb 19, 2022" },
      { name: "Gray Simon", mobileNo: "(04) 0134 0955", email: "eget.ipsum@icloud.couk", id: 1048, status: "active", createdAt: "Jan 8, 2024" },
      { name: "Xander Key", mobileNo: "(05) 3755 3771", email: "cubilia.curae.donec@hotmail.com", id: 1049, status: "active", createdAt: "Mar 28, 2023" },
      { name: "Stephanie Mccormick", mobileNo: "(07) 3671 6157", email: "sed.sapien@icloud.net", id: 1050, status: "inactive", createdAt: "Jul 27, 2023" },
      { name: "Hadassah Jacobson", mobileNo: "(06) 8149 3121", email: "id.libero@icloud.org", id: 1051, status: "inactive", createdAt: "Apr 11, 2022" },
      { name: "Connor Dorsey", mobileNo: "(03) 8884 8648", email: "nec.ante@outlook.com", id: 1052, status: "active", createdAt: "Dec 6, 2023" },
      { name: "Mufutau Dillon", mobileNo: "(03) 3536 4114", email: "nonummy.fusce@outlook.org", id: 1053, status: "active", createdAt: "Mar 23, 2023" },
      { name: "Karina French", mobileNo: "(02) 6557 1827", email: "praesent.eu.dui@yahoo.couk", id: 1054, status: "inactive", createdAt: "Nov 2, 2023" },
      { name: "Jaden Workman", mobileNo: "(02) 0171 4462", email: "curabitur@google.org", id: 1055, status: "inactive", createdAt: "Oct 9, 2022" },
      { name: "Azalia Abbott", mobileNo: "(09) 7862 4652", email: "tincidunt.orci@google.net", id: 1056, status: "active", createdAt: "Apr 7, 2022" },
      { name: "Faith Atkins", mobileNo: "(07) 8849 0483", email: "placerat.velit.quisque@outlook.ca", id: 1057, status: "active", createdAt: "Jul 20, 2022" },
      { name: "Eric Acosta", mobileNo: "(01) 1070 5477", email: "sed.tortor@protonmail.net", id: 1058, status: "inactive", createdAt: "Oct 29, 2022" },
      { name: "Evangeline Roth", mobileNo: "(07) 2573 7671", email: "pellentesque@outlook.org", id: 1059, status: "inactive", createdAt: "Aug 1, 2022" },
      { name: "Basil Love", mobileNo: "(07) 1072 9971", email: "dis.parturient@google.org", id: 1060, status: "active", createdAt: "May 26, 2022" },
      { name: "Dara Morrow", mobileNo: "(06) 6724 8261", email: "sem.pellentesque.ut@hotmail.com", id: 1061, status: "active", createdAt: "Apr 12, 2023" },
      { name: "Cara Saunders", mobileNo: "(01) 7117 8265", email: "risus.nunc@google.com", id: 1062, status: "inactive", createdAt: "Nov 5, 2023" },
      { name: "Kaseem Dillon", mobileNo: "(03) 3288 0525", email: "luctus.et@aol.net", id: 1063, status: "inactive", createdAt: "Mar 30, 2023" },
      { name: "Isabella Nieves", mobileNo: "(07) 4476 7674", email: "at.libero.morbi@protonmail.com", id: 1064, status: "active", createdAt: "Jun 11, 2023" },
      { name: "Clark Hicks", mobileNo: "(08) 4192 1756", email: "duis@yahoo.org", id: 1065, status: "active", createdAt: "May 18, 2022" },
      { name: "Akeem Russo", mobileNo: "(07) 8161 7129", email: "hendrerit.neque@outlook.org", id: 1066, status: "inactive", createdAt: "Sep 8, 2023" },
      { name: "Salvador Valenzuela", mobileNo: "(05) 4248 5407", email: "sociis.natoque.penatibus@outlook.com", id: 1067, status: "inactive", createdAt: "Nov 3, 2022" },
      { name: "Lucian Thomas", mobileNo: "(08) 1861 9968", email: "nunc.sed@aol.org", id: 1068, status: "active", createdAt: "Mar 9, 2023" },
      { name: "Dustin Cruz", mobileNo: "(04) 7676 4206", email: "nisi@google.ca", id: 1069, status: "active", createdAt: "Apr 12, 2022" },
      { name: "Deirdre Spears", mobileNo: "(04) 7786 5323", email: "vehicula@google.ca", id: 1070, status: "inactive", createdAt: "Mar 15, 2023" },
      { name: "Rhona Dickerson", mobileNo: "(02) 2064 1283", email: "vehicula.risus@aol.couk", id: 1071, status: "inactive", createdAt: "Mar 13, 2022" },
      { name: "Kaitlin Chambers", mobileNo: "(03) 4940 8587", email: "interdum.ligula@aol.ca", id: 1072, status: "active", createdAt: "May 11, 2022" },
      { name: "Nyssa Marsh", mobileNo: "(02) 5989 3245", email: "elit.erat@icloud.org", id: 1073, status: "active", createdAt: "Sep 26, 2022" },
      { name: "Kane Webster", mobileNo: "(03) 5314 4771", email: "parturient@hotmail.net", id: 1074, status: "inactive", createdAt: "Mar 25, 2023" },
      { name: "Candace Hayes", mobileNo: "(02) 5739 4237", email: "eu.enim.etiam@protonmail.ca", id: 1075, status: "inactive", createdAt: "Sep 23, 2023" },
      { name: "Ira Gallagher", mobileNo: "(06) 5514 3219", email: "sed.nulla@icloud.couk", id: 1076, status: "active", createdAt: "Sep 22, 2023" },
      { name: "Wesley Mcfadden", mobileNo: "(05) 3097 1730", email: "massa.suspendisse@google.net", id: 1077, status: "active", createdAt: "Jan 6, 2024" },
      { name: "Latifah Waters", mobileNo: "(03) 4624 1771", email: "sed@aol.couk", id: 1078, status: "inactive", createdAt: "Aug 16, 2022" },
      { name: "Zorita Watkins", mobileNo: "(08) 2561 5210", email: "arcu.et@yahoo.edu", id: 1079, status: "inactive", createdAt: "Aug 25, 2022" },
      { name: "Mercedes Richards", mobileNo: "(07) 2174 0491", email: "arcu.curabitur.ut@icloud.org", id: 1080, status: "active", createdAt: "Aug 5, 2022" },
      { name: "Leo Nieves", mobileNo: "(05) 8673 9082", email: "egestas.ligula.nullam@icloud.com", id: 1081, status: "active", createdAt: "Feb 3, 2023" },
      { name: "Dawn Bird", mobileNo: "(08) 1955 0458", email: "curabitur@protonmail.com", id: 1082, status: "inactive", createdAt: "Dec 7, 2023" },
      { name: "Solomon Hicks", mobileNo: "(01) 3435 2752", email: "auctor@icloud.org", id: 1083, status: "inactive", createdAt: "Jun 27, 2022" },
      { name: "Evangeline Potter", mobileNo: "(09) 2505 8510", email: "non@icloud.edu", id: 1084, status: "active", createdAt: "Jun 22, 2023" },
      { name: "Cody Beck", mobileNo: "(02) 8865 9061", email: "nec.euismod@outlook.edu", id: 1085, status: "active", createdAt: "Nov 20, 2022" },
      { name: "Maite Lynn", mobileNo: "(02) 1677 8687", email: "leo@icloud.couk", id: 1086, status: "inactive", createdAt: "Dec 31, 2023" },
      { name: "Wylie Mitchell", mobileNo: "(02) 3428 4523", email: "ipsum.phasellus.vitae@protonmail.net", id: 1087, status: "inactive", createdAt: "Dec 29, 2022" },
      { name: "Imelda Gamble", mobileNo: "(09) 6522 4667", email: "arcu.ac@google.net", id: 1088, status: "active", createdAt: "May 30, 2022" },
      { name: "Abbot Weaver", mobileNo: "(07) 0876 3222", email: "vestibulum.lorem.sit@hotmail.couk", id: 1089, status: "active", createdAt: "Aug 17, 2022" },
      { name: "Virginia Farrell", mobileNo: "(06) 5740 4620", email: "nec.leo@hotmail.ca", id: 1090, status: "inactive", createdAt: "Mar 8, 2022" },
      { name: "Edan Morton", mobileNo: "(07) 1379 2518", email: "nec@hotmail.net", id: 1091, status: "inactive", createdAt: "Mar 25, 2022" },
      { name: "Miranda Fuentes", mobileNo: "(04) 8946 8822", email: "dolor.vitae@outlook.edu", id: 1092, status: "active", createdAt: "Dec 2, 2022" },
      { name: "Felix Keith", mobileNo: "(04) 6456 8786", email: "semper.cursus@protonmail.com", id: 1093, status: "active", createdAt: "Sep 19, 2023" },
      { name: "Elton Curtis", mobileNo: "(01) 3237 3618", email: "urna.convallis@outlook.com", id: 1094, status: "inactive", createdAt: "Jun 16, 2023" },
      { name: "Jenette Petty", mobileNo: "(05) 7025 7812", email: "ipsum.cursus@aol.org", id: 1095, status: "inactive", createdAt: "Oct 19, 2022" },
      { name: "Brenda Holmes", mobileNo: "(07) 5328 4406", email: "imperdiet.dictum@google.net", id: 1096, status: "active", createdAt: "Jan 1, 2023" },
      { name: "Cora Stanley", mobileNo: "(07) 2542 1511", email: "lectus.ante.dictum@outlook.com", id: 1097, status: "active", createdAt: "Nov 28, 2023" },
      { name: "Thor Parker", mobileNo: "(06) 2160 6645", email: "cursus.a@icloud.org", id: 1098, status: "inactive", createdAt: "Apr 23, 2022" },
      { name: "Vernon Watson", mobileNo: "(02) 2784 0675", email: "cursus.vestibulum@outlook.org", id: 1099, status: "inactive", createdAt: "Mar 5, 2023" },
    ];

    this.service.initialData = data;
  };
}

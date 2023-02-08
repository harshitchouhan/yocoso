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
      { id: 1000, status: "active", title: "amet nulla.", from: "€569", to: "€996", charges: "€808" },
      { id: 1001, status: "active", title: "convallis", from: "€895", to: "€706", charges: "€598" },
      { id: 1002, status: "inactive", title: "quam a felis ullamcorper viverra. Maecenas iaculis", from: "€736", to: "€116", charges: "€227" },
      { id: 1003, status: "inactive", title: "ante ipsum primis in faucibus", from: "€626", to: "€704", charges: "€300" },
      { id: 1004, status: "active", title: "tincidunt pede ac urna. Ut tincidunt", from: "€501", to: "€229", charges: "€383" },
      { id: 1005, status: "active", title: "Pellentesque ut ipsum ac", from: "€397", to: "€751", charges: "€621" },
      { id: 1006, status: "inactive", title: "Cum sociis natoque penatibus et magnis", from: "€481", to: "€121", charges: "€328" },
      { id: 1007, status: "inactive", title: "lorem, vehicula et, rutrum eu, ultrices", from: "€497", to: "€764", charges: "€438" },
      { id: 1008, status: "active", title: "non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum.", from: "€179", to: "€773", charges: "€204" },
      { id: 1009, status: "active", title: "gravida. Aliquam tincidunt, nunc ac mattis", from: "€741", to: "€121", charges: "€356" },
      { id: 1010, status: "inactive", title: "mi felis,", from: "€392", to: "€679", charges: "€105" },
      { id: 1011, status: "inactive", title: "natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", from: "€797", to: "€903", charges: "€318" },
      { id: 1012, status: "active", title: "ornare, facilisis eget, ipsum.", from: "€311", to: "€521", charges: "€659" },
      { id: 1013, status: "active", title: "dictum ultricies ligula.", from: "€156", to: "€791", charges: "€172" },
      { id: 1014, status: "inactive", title: "dapibus rutrum, justo.", from: "€858", to: "€192", charges: "€877" },
      { id: 1015, status: "inactive", title: "pharetra.", from: "€423", to: "€927", charges: "€564" },
      { id: 1016, status: "active", title: "nunc ac mattis", from: "€508", to: "€541", charges: "€631" },
      { id: 1017, status: "active", title: "arcu. Vestibulum ut eros", from: "€184", to: "€830", charges: "€474" },
      { id: 1018, status: "inactive", title: "Sed et libero. Proin mi. Aliquam gravida mauris ut mi.", from: "€600", to: "€766", charges: "€777" },
      { id: 1019, status: "inactive", title: "lorem. Donec elementum, lorem", from: "€107", to: "€581", charges: "€997" },
      { id: 1020, status: "active", title: "enim commodo hendrerit. Donec porttitor tellus non", from: "€781", to: "€202", charges: "€299" },
      { id: 1021, status: "active", title: "quis diam.", from: "€131", to: "€658", charges: "€839" },
      { id: 1022, status: "inactive", title: "sollicitudin orci sem eget massa.", from: "€194", to: "€860", charges: "€892" },
      { id: 1023, status: "inactive", title: "cursus purus. Nullam", from: "€436", to: "€513", charges: "€201" },
      { id: 1024, status: "active", title: "fermentum risus, at fringilla purus mauris a nunc.", from: "€121", to: "€374", charges: "€291" },
      { id: 1025, status: "active", title: "tellus eu augue porttitor interdum. Sed auctor odio", from: "€982", to: "€777", charges: "€303" },
      { id: 1026, status: "inactive", title: "tincidunt vehicula risus. Nulla eget metus", from: "€668", to: "€649", charges: "€502" },
      { id: 1027, status: "inactive", title: "magna. Suspendisse tristique neque venenatis", from: "€795", to: "€551", charges: "€967" },
      { id: 1028, status: "active", title: "nec tellus. Nunc lectus pede, ultrices a,", from: "€786", to: "€667", charges: "€151" },
      { id: 1029, status: "active", title: "a, auctor", from: "€225", to: "€825", charges: "€154" },
      { id: 1030, status: "inactive", title: "pharetra ut, pharetra sed, hendrerit a,", from: "€298", to: "€375", charges: "€370" },
      { id: 1031, status: "inactive", title: "congue a, aliquet vel,", from: "€711", to: "€126", charges: "€999" },
      { id: 1032, status: "active", title: "ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo", from: "€110", to: "€563", charges: "€162" },
      { id: 1033, status: "active", title: "semper auctor. Mauris", from: "€320", to: "€446", charges: "€227" },
      { id: 1034, status: "inactive", title: "pellentesque a, facilisis non, bibendum sed, est.", from: "€515", to: "€667", charges: "€116" },
      { id: 1035, status: "inactive", title: "convallis convallis dolor. Quisque tincidunt pede ac", from: "€605", to: "€122", charges: "€101" },
      { id: 1036, status: "active", title: "odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis", from: "€935", to: "€546", charges: "€817" },
      { id: 1037, status: "active", title: "enim. Nunc ut erat. Sed nunc est,", from: "€539", to: "€219", charges: "€633" },
      { id: 1038, status: "inactive", title: "pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare", from: "€819", to: "€705", charges: "€900" },
      { id: 1039, status: "inactive", title: "malesuada ut, sem. Nulla interdum. Curabitur dictum.", from: "€811", to: "€773", charges: "€994" },
      { id: 1040, status: "active", title: "pede ac urna. Ut tincidunt", from: "€477", to: "€933", charges: "€646" },
      { id: 1041, status: "active", title: "quam vel", from: "€559", to: "€820", charges: "€462" },
      { id: 1042, status: "inactive", title: "nisl arcu iaculis enim, sit amet ornare", from: "€638", to: "€331", charges: "€834" },
      { id: 1043, status: "inactive", title: "Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra.", from: "€543", to: "€976", charges: "€123" },
      { id: 1044, status: "active", title: "at arcu. Vestibulum", from: "€838", to: "€434", charges: "€727" },
      { id: 1045, status: "active", title: "purus ac tellus. Suspendisse sed", from: "€702", to: "€602", charges: "€975" },
      { id: 1046, status: "inactive", title: "rutrum magna. Cras convallis", from: "€982", to: "€575", charges: "€107" },
      { id: 1047, status: "inactive", title: "ornare. Fusce mollis. Duis sit amet", from: "€994", to: "€668", charges: "€559" },
      { id: 1048, status: "active", title: "egestas rhoncus. Proin nisl sem, consequat nec,", from: "€556", to: "€510", charges: "€936" },
      { id: 1049, status: "active", title: "congue, elit sed consequat auctor, nunc nulla", from: "€651", to: "€501", charges: "€967" },
      { id: 1050, status: "inactive", title: "malesuada", from: "€206", to: "€232", charges: "€994" },
      { id: 1051, status: "inactive", title: "Morbi sit", from: "€369", to: "€628", charges: "€756" },
      { id: 1052, status: "active", title: "accumsan laoreet", from: "€418", to: "€802", charges: "€177" },
      { id: 1053, status: "active", title: "Lorem ipsum dolor sit amet, consectetuer adipiscing", from: "€651", to: "€115", charges: "€224" },
      { id: 1054, status: "inactive", title: "nascetur ridiculus mus. Proin vel arcu", from: "€184", to: "€770", charges: "€485" },
      { id: 1055, status: "inactive", title: "eleifend non, dapibus rutrum,", from: "€395", to: "€266", charges: "€116" },
      { id: 1056, status: "active", title: "lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie.", from: "€161", to: "€345", charges: "€959" },
      { id: 1057, status: "active", title: "luctus. Curabitur egestas nunc sed libero. Proin sed", from: "€843", to: "€657", charges: "€631" },
      { id: 1058, status: "inactive", title: "eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit", from: "€399", to: "€940", charges: "€804" },
      { id: 1059, status: "inactive", title: "felis orci, adipiscing non, luctus sit amet,", from: "€563", to: "€513", charges: "€519" },
      { id: 1060, status: "active", title: "metus. In nec orci. Donec nibh.", from: "€959", to: "€492", charges: "€299" },
      { id: 1061, status: "active", title: "montes, nascetur ridiculus", from: "€378", to: "€768", charges: "€493" },
      { id: 1062, status: "inactive", title: "ornare. In faucibus. Morbi", from: "€491", to: "€449", charges: "€854" },
      { id: 1063, status: "inactive", title: "varius. Nam porttitor scelerisque", from: "€874", to: "€568", charges: "€231" },
      { id: 1064, status: "active", title: "neque sed sem egestas blandit. Nam nulla magna,", from: "€976", to: "€912", charges: "€930" },
      { id: 1065, status: "active", title: "lectus, a sollicitudin orci sem", from: "€790", to: "€814", charges: "€633" },
      { id: 1066, status: "inactive", title: "diam luctus lobortis. Class aptent taciti sociosqu", from: "€954", to: "€300", charges: "€411" },
      { id: 1067, status: "inactive", title: "ornare sagittis felis. Donec", from: "€945", to: "€811", charges: "€740" },
      { id: 1068, status: "active", title: "quis accumsan convallis, ante lectus convallis est,", from: "€210", to: "€704", charges: "€586" },
      { id: 1069, status: "active", title: "vitae", from: "€878", to: "€567", charges: "€826" },
      { id: 1070, status: "inactive", title: "sollicitudin commodo", from: "€549", to: "€382", charges: "€811" },
      { id: 1071, status: "inactive", title: "dolor vitae dolor. Donec fringilla. Donec feugiat", from: "€579", to: "€668", charges: "€415" },
      { id: 1072, status: "active", title: "arcu. Morbi sit amet massa. Quisque porttitor", from: "€688", to: "€838", charges: "€928" },
      { id: 1073, status: "active", title: "placerat, augue. Sed molestie. Sed id risus quis diam", from: "€630", to: "€650", charges: "€177" },
      { id: 1074, status: "inactive", title: "Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam", from: "€772", to: "€901", charges: "€452" },
      { id: 1075, status: "inactive", title: "arcu. Nunc mauris. Morbi non sapien", from: "€949", to: "€900", charges: "€629" },
      { id: 1076, status: "active", title: "ridiculus mus. Donec dignissim magna a tortor. Nunc commodo", from: "€451", to: "€578", charges: "€956" },
      { id: 1077, status: "active", title: "ipsum. Phasellus vitae mauris", from: "€936", to: "€772", charges: "€213" },
      { id: 1078, status: "inactive", title: "arcu vel quam dignissim pharetra.", from: "€761", to: "€742", charges: "€765" },
      { id: 1079, status: "inactive", title: "magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec", from: "€967", to: "€580", charges: "€106" },
      { id: 1080, status: "active", title: "nunc. Quisque ornare", from: "€803", to: "€843", charges: "€519" },
      { id: 1081, status: "active", title: "tincidunt tempus risus. Donec egestas. Duis ac arcu.", from: "€556", to: "€270", charges: "€606" },
      { id: 1082, status: "inactive", title: "ac turpis egestas. Fusce aliquet magna a neque. Nullam", from: "€896", to: "€794", charges: "€656" },
      { id: 1083, status: "inactive", title: "dis parturient montes, nascetur ridiculus mus. Aenean eget magna.", from: "€401", to: "€755", charges: "€220" },
      { id: 1084, status: "active", title: "neque sed sem egestas blandit. Nam nulla magna, malesuada vel,", from: "€751", to: "€742", charges: "€626" },
      { id: 1085, status: "active", title: "Sed neque. Sed eget", from: "€863", to: "€185", charges: "€633" },
      { id: 1086, status: "inactive", title: "ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna.", from: "€594", to: "€956", charges: "€883" },
      { id: 1087, status: "inactive", title: "molestie in, tempus eu,", from: "€467", to: "€225", charges: "€404" },
      { id: 1088, status: "active", title: "ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat", from: "€991", to: "€625", charges: "€540" },
      { id: 1089, status: "active", title: "habitant morbi tristique senectus et netus et malesuada", from: "€232", to: "€809", charges: "€717" },
      { id: 1090, status: "inactive", title: "lacinia mattis. Integer eu lacus.", from: "€253", to: "€544", charges: "€625" },
      { id: 1091, status: "inactive", title: "eu metus. In lorem. Donec elementum, lorem ut aliquam", from: "€309", to: "€510", charges: "€251" },
      { id: 1092, status: "active", title: "erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor.", from: "€321", to: "€949", charges: "€235" },
      { id: 1093, status: "active", title: "nunc sed pede. Cum sociis natoque penatibus", from: "€930", to: "€569", charges: "€619" },
      { id: 1094, status: "inactive", title: "id nunc interdum feugiat. Sed nec metus facilisis lorem", from: "€892", to: "€153", charges: "€490" },
      { id: 1095, status: "inactive", title: "conubia nostra, per inceptos hymenaeos. Mauris ut", from: "€958", to: "€603", charges: "€159" },
      { id: 1096, status: "active", title: "tempus non, lacinia at, iaculis quis, pede. Praesent eu", from: "€263", to: "€593", charges: "€457" },
      { id: 1097, status: "active", title: "magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim", from: "€479", to: "€714", charges: "€836" },
      { id: 1098, status: "inactive", title: "elit, pretium et, rutrum non, hendrerit id, ante. Nunc", from: "€703", to: "€177", charges: "€406" },
      { id: 1099, status: "inactive", title: "Nunc laoreet lectus quis massa.", from: "€178", to: "€332", charges: "€841" },
    ];

    this.service.initialData = data;
  };
}

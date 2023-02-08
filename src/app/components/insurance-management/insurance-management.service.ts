/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { debounceTime, switchMap, tap } from "rxjs/operators";

import { SortColumn, SortDirection } from "../../shared/directives/NgbdSortableHeader";

interface SearchResult {
  data: any[];
  totalData: any[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  filter: string | boolean;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  initialData: any[];
}

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(data: any[], column: SortColumn, direction: string): any[] {
  if (direction === "" || column === "") {
    return data;
  } else {
    return [...data].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === "asc" ? res : -res;
    });
  }
}

function matches(data: any, term: string) {
  let searchTerm = term.toLocaleLowerCase();

  return (
    data.id == searchTerm ||
    data.title.toLowerCase().includes(searchTerm) ||
    data.from.includes(searchTerm) ||
    data.to.includes(searchTerm) ||
    data.charges.includes(searchTerm) ||
    data.status.toLowerCase().includes(searchTerm)
  );
}
function matchesFilter(data: any, term: boolean | string) {
  if (term === "all") {
    return data;
  } else {
    return data.active === term;
  }
}

@Injectable({ providedIn: "root" })
export class TableService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _tableItem$ = new BehaviorSubject<any[]>([]);
  private _totalData$ = new BehaviorSubject<any[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: "",
    filter: "all",
    sortColumn: "",
    sortDirection: "",
    initialData: [],
  };

  constructor() {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._tableItem$.next(result.data);
        this._total$.next(result.total);
        this._totalData$.next(result.totalData);
      });

    this._search$.next();
  }

  get tableItem$() {
    return this._tableItem$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get totalData$() {
    return this._totalData$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set filter(filter: string) {
    this._set({ filter });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }
  set initialData(initialData: any) {
    this._set({ initialData });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm, initialData } = this._state;

    // 1. sort
    let data = sort(initialData, sortColumn, sortDirection);

    // 2. filter
    data = data.filter((row) => matches(row, searchTerm));

    // 3. filter status
    // data = data.filter((row) => matchesFilter(row, filter));
    const total = data.length;

    // 4. paginate
    let totalData = data;
    data = data.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ data, total, totalData });
  }
}

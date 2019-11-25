import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { AccountSorting } from '../../modules/accounts/model/account';

@Component({
  selector: 'app-sorting-header',
  templateUrl: './sorting-header.component.html',
  styleUrls: ['./sorting-header.component.scss']
})
export class SortingHeaderComponent implements OnInit, OnChanges {
  @Input()
  fieldName: string;

  @Input()
  fieldTitle: string;
  
  @Input()
  currentSorting: AccountSorting;

  @Output()
  public accountSort: EventEmitter<AccountSorting> = new EventEmitter<AccountSorting>();

  sortOrder:string;
  sortIcon:string;

  constructor() { }

  ngOnInit() {
    this.sortIcon = 'fa-sort';
  }

  ngOnChanges() {
    if(this.currentSorting && this.fieldName === this.currentSorting.sortBy) {
      this.sortIcon = ( this.currentSorting.sortOrder === 'asc') ? 'fa-sort-down' : 'fa-sort-up';
      this.sortOrder = this.currentSorting.sortOrder;
    } else {
      this.sortIcon = 'fa-sort';
      this.sortOrder = 'asc';
    }
  }

  sortRecords(sortBy: string, sortOrder: string) {
    this.accountSort.emit({ sortBy: sortBy, sortOrder: sortOrder });
  }

}

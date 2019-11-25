import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { Store, select } from '@ngrx/store';
import { LoadAccount } from '../../store/action';
import { AccountState } from '../../store/reducer';
import { fromApp } from '../../store/selector';
import { Account, AccountList, AccountSorting } from '../../model/account';
import { AppConstants } from 'src/app/constant/application-constant';


@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {
  accountList:Account[];
  accontSummary:AccountList;
  currentSorting:AccountSorting = null;
  currentIndex = AppConstants.initialPage;
  
  constructor(readonly accountsService:AccountsService, private readonly store: Store<AccountState>) { }

  /**
   * ngOnInt lifecycle hook
  */
  ngOnInit() {
    this.store.pipe(select(fromApp.getAccountsList)).subscribe(accountList=>{
      if(accountList) {
        this.accontSummary = accountList;
        this.accountList = accountList.list;
      }
    });
  }

  /**
   * @function : To load more accounts records
   * Trigger on load more button click
  */
  loadMore() {
    let listCount = this.accountList.length;
    if( listCount < this.accontSummary.total) {
      ++this.currentIndex;
      this.store.dispatch(new LoadAccount({pageIndex:this.currentIndex,
                pageSize:AppConstants.pageSize, 
                sorting: this.currentSorting}));
      
    }
  }
  
  /**
   * Function: To perform sorting on click of column header
   * @param data 
  */
  sortRecords(data) {
    let orderBy = data.sortBy;
    let sortOrder = data.sortOrder;
    this.currentIndex = AppConstants.initialPage;
    
    if(this.currentSorting && orderBy === this.currentSorting.sortBy) {
      sortOrder = ( sortOrder === 'asc') ? 'desc' : 'asc';
    }else{
      sortOrder = 'asc';
    }

    //Updating current sorting order
    this.currentSorting = {
      ...this.currentSorting,
      sortBy: orderBy,
      sortOrder: sortOrder
    }

    //Dispatch Action to perform backend side sorting
    this.store.dispatch(new LoadAccount({pageIndex:AppConstants.initialPage,
      pageSize:AppConstants.pageSize, 
      sorting: this.currentSorting}));
  }

  getTodaysChangesClass(accountDetail: Account) {
    let todaysChanges= accountDetail.todayChange;
    if( todaysChanges > 0 ) {
      return 'green-color';
    }else if( todaysChanges < 0 ) {
      return 'red-color';
    } else {
      return 'gray-color';
    }
  }

  todaysClosingBalance(accountDetail: Account) {
    let closingBalance = ( (accountDetail.balance *accountDetail.todayChange ) /100 );
    closingBalance = (accountDetail.result==='pos') ? accountDetail.balance + closingBalance : accountDetail.balance - closingBalance;
    return closingBalance;
  }

  getLossProfitSign(accountDetail: Account) {
    return (accountDetail.result==='pos') ? "+" : "-";
  }


}

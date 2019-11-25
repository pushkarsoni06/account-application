import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account, AccountList, AccountSorting } from '../model/account';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  constructor(private http: HttpClient) { }

  getAccountsDetail(from:number, to:number, sortData: AccountSorting):Observable<AccountList> {
    let queryString = '_index='+from+'&_size='+to;
    if( sortData ) {
      queryString= queryString+'&sort_by='+sortData.sortBy+'&order='+sortData.sortOrder;
    }
    
    const url = 'http://localhost:3000/api/accountsList?'+queryString;
    return this.http.get<AccountList>(url);
  }
}

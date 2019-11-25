import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AccountState } from '../store/reducer';
import { LoadAccount } from '../store/action';
import { AppConstants } from 'src/app/constant/application-constant';
import { AccountSorting } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountGaurdGuard implements  CanActivate{
  constructor(private store:Store<AccountState>) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let defaultSorting:AccountSorting = null;
    this.store.dispatch(new LoadAccount({pageIndex:AppConstants.initialPage,
                      pageSize:AppConstants.pageSize,
                      sorting: defaultSorting}));
    return true;
  }
  
}

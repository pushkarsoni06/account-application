import { Injectable } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadAccount, AccountActions, LoadAccountDone, LoadMoreAccountDone } from './action';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class AccountEffects{
    constructor(private readonly accountService:AccountsService, 
        private readonly actions:Actions, ){}

    @Effect()
    loadAccountSummary$ = this.actions.pipe(
        ofType<LoadAccount>(AccountActions.LOAD_ACCOUNT),
        mergeMap((from)=> {
            let payloadData =  from.payload;
            return this.accountService.getAccountsDetail(payloadData.pageIndex, payloadData.pageSize, payloadData.sorting).pipe(
                map(accountList=> {
                    if( payloadData.pageIndex == 1 ) {
                        return new LoadAccountDone({accountSummery :accountList });
                    }else{
                        return new LoadMoreAccountDone({accountSummery :accountList });
                    }
                }
            ));
        })
    )
}
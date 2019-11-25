import { Action } from '@ngrx/store';
import { Account, AccountList, AccountSorting } from '../model/account';

export const enum AccountActions{
    LOAD_ACCOUNT = "[ACCOUNT] LOAD ACCOUNT",
    LOAD_ACCOUNT_DONE = "[ACCOUNT] LOAD ACCOUNT DONE",
    LOAD_MORE_ACCOUNT = "[ACCOUNT] LOAD  MORE  ACCOUNT",
    LOAD_MORE_ACCOUNT_DONE = "[ACCOUNT] LOAD MORE  ACCOUNT DONE",
}


export class LoadAccount implements Action {
    readonly type = AccountActions.LOAD_ACCOUNT;
    constructor(public payload:{pageIndex:number, 
                        pageSize:number,
                        sorting: AccountSorting}) {}
}

export class LoadAccountDone implements Action{
    readonly type = AccountActions.LOAD_ACCOUNT_DONE;
    constructor(public payload:{accountSummery:AccountList}) {}
}

export class LoadMoreAccount implements Action{
    readonly type = AccountActions.LOAD_MORE_ACCOUNT;
    constructor(public payload:{pageIndex:number, pageSize:number,
        sorting: AccountSorting}) {}
}

export class LoadMoreAccountDone implements Action{
    readonly type = AccountActions.LOAD_MORE_ACCOUNT_DONE;
    constructor(public payload:{accountSummery:AccountList}) {}
}


export type AccountActionTypes = LoadAccount 
| LoadAccountDone
| LoadMoreAccount
| LoadMoreAccountDone;
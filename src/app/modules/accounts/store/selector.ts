import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AccountState } from './reducer';

export namespace fromApp{
    const getAccountsModule = createFeatureSelector<AccountState>('accounts_app');

export const getAccountsList = createSelector(
    getAccountsModule,
    module=> (module && module.accountsList) ? module.accountsList : null
);
}

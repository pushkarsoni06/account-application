import { AccountSorting } from '../modules/accounts/model/account';

export class AppConstants{
    public static readonly pageSize:number = 3;
    public static readonly initialPage:number = 1;

    public static readonly accountListSorting: AccountSorting = {
        sortBy: 'account_number',
        sortOrder: 'asc',
    }

}
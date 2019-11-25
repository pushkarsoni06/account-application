export interface Account{
    id:number;
    name: string;
    accountNumber: number,
    balance:number;
    todayChange:number;
	result:string;
    
}

export interface AccountList{
    list:Account[];
    total: number;
}

export interface AccountSorting{
    sortBy: string;
    sortOrder: string;
}
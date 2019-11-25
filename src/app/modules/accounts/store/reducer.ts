import { AccountActions, AccountActionTypes } from './action';
import { Account, AccountList } from '../model/account';

export interface DematAccountState{
    accounts_app: AccountState
}

export interface AccountState{
    accountsList:AccountList
}
  
const initialState: AccountState = {
    accountsList: null
}

export function AccountsReducer(state= initialState, action: AccountActionTypes): AccountState {
    switch(action.type) {
        case AccountActions.LOAD_ACCOUNT_DONE:{
            return {
                ...state,
                accountsList: action.payload.accountSummery
            }
        }
        case AccountActions.LOAD_MORE_ACCOUNT_DONE:{
            let dataPayload = action.payload.accountSummery;
            console.log(state.accountsList);
            return {
                ...state,
                accountsList: {
                    ...state.accountsList,
                    list :[
                        ...state.accountsList.list,
                        ...dataPayload.list
                    ]                    
                }
            }
        }

        

        default:
            return state;
    }
}
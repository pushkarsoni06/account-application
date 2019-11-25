import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { AccountsListComponent } from './component/accounts-list/accounts-list.component';
import { AccountGaurdGuard } from './gaurds/account-gaurd.guard';

const routes: Routes = [
    {path:"", component:AccountsListComponent, canActivate: [AccountGaurdGuard]}, 
];
@NgModule({ 
   imports: [
      RouterModule.forChild(routes)
   ],
   exports: [RouterModule] 
}) 
export class AccountRoutingModule { }
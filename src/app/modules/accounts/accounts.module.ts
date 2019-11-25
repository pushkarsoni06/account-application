import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsService } from './services/accounts.service';
import { AccountsListComponent } from './component/accounts-list/accounts-list.component';
import { AccountRoutingModule } from './account-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SortingHeaderComponent } from 'src/app/shared/sorting-header/sorting-header.component';

@NgModule({
  declarations: [AccountsListComponent, SortingHeaderComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule,
  ],
  providers:[
    AccountsService
  ]
})
export class AccountsModule { }

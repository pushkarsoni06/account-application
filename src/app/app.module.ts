import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AccountsModule } from './modules/accounts/accounts.module';
import { AppRoutingModule } from './app-routing.module'; 
import { AccountsReducer } from './modules/accounts/store/reducer';
import { AccountEffects } from './modules/accounts/store/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccountsModule,
    AppRoutingModule,
    StoreModule.forRoot({accounts_app: AccountsReducer}),
    EffectsModule.forRoot([AccountEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

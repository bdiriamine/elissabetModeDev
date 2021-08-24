import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountComponent } from './account/account.component';
import { CasinoHistoryComponent } from './casino-history/casino-history.component';


@NgModule({
  declarations: [
    SideBarComponent,
    TransactionsComponent,
    AccountComponent,
    CasinoHistoryComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

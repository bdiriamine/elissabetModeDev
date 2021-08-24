import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CasinoHistoryComponent } from './casino-history/casino-history.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: 'transaction', component: TransactionsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'casino-history', component: CasinoHistoryComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

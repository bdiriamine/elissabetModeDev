import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinoComponent } from './casino/casino.component';
import { LiveCasinoComponent } from './live-casino/live-casino.component';

const routes: Routes = [
  { path: '', component: CasinoComponent },
  { path: 'live', component: LiveCasinoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasinoRoutingModule { }

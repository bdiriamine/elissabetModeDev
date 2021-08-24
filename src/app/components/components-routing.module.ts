import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LiveComponent } from './live/live.component';
import { MiniGamesComponent } from './mini-games/mini-games.component';
import { ResultsComponent } from './results/results.component';
import { SportComponent } from './sport/sport.component';

const routes: Routes = [
  { path: '', redirectTo: 'sport', pathMatch: 'full', },
  { path: 'sport', component: SportComponent },
  { path: 'live', component: LiveComponent },
  { path: 'home', component: HomeComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'minigames', component: MiniGamesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

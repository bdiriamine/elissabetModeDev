import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { SportComponent } from './sport/sport.component';
import { LiveComponent } from './live/live.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { MiniGamesComponent } from './mini-games/mini-games.component';


@NgModule({
  declarations: [
    SportComponent,
    LiveComponent,
    HomeComponent,
    ResultsComponent,
    MiniGamesComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }

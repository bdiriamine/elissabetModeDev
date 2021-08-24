import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasinoRoutingModule } from './casino-routing.module';
import { CasinoComponent } from './casino/casino.component';
import { LiveCasinoComponent } from './live-casino/live-casino.component';


@NgModule({
  declarations: [
    CasinoComponent,
    LiveCasinoComponent
  ],
  imports: [
    CommonModule,
    CasinoRoutingModule,
    
  ]
})
export class CasinoModule { }

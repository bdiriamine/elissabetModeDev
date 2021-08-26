import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CasinoModule } from '../casino/casino.module';
import { CoreModule } from '../core/core.module';
import { UserModule } from '../user/user.module';
import { LiveComponent } from './live/live.component';
import { SportComponent } from './sport/sport.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    LiveComponent,
    SportComponent,
    HomeComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    CasinoModule,
    CoreModule,
    UserModule,
    
  ],
  exports : [HomeComponent]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportComponent } from './components/sport/sport.component';
import { ChatmobileComponent } from './shared/chatmobile/chatmobile.component';
import { MaintenanceComponent } from './shared/maintenance/maintenance.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { TermsandconditionsComponent } from './shared/termsandconditions/termsandconditions.component';

const routes: Routes = [
  { path: '', redirectTo: 'sport', pathMatch: 'full', },
  { path: 'sport', component: SportComponent },
  {
    path: '',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
  
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
  },
  {
    path: 'casino',
    loadChildren: () => import('./casino/casino.module').then(m => m.CasinoModule),
  },
  {path:'terms-conditions',component:TermsandconditionsComponent},
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'chat', component: ChatmobileComponent },
  { path: '**', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

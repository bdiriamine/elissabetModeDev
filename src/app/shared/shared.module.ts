import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { ChatmobileComponent } from './chatmobile/chatmobile.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    HeaderMobileComponent,
    CarrouselComponent,
    FooterComponent,
    NotfoundComponent,
    MaintenanceComponent,
    TermsandconditionsComponent,
    ChatmobileComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,

  ],
  exports: [NavbarComponent, HeaderComponent, HeaderMobileComponent, CarrouselComponent, FooterComponent, MaintenanceComponent, NotfoundComponent, TermsandconditionsComponent, ChatmobileComponent],
})
export class SharedModule { }

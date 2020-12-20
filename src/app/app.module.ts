import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';

// import {MaterialModule} from '@angular/material'
import { MatExpansionModule } from '@angular/material/expansion';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { FaqpageComponent } from './faqpage/faqpage.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    AboutpageComponent,
    FaqpageComponent,
    MobileMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatSidenavModule,
    RouterModule.forRoot([
      {path: 'home', component: HomepageComponent},
      {path: 'about', component: AboutpageComponent},
      {path: 'faq', component: FaqpageComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//common
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

// pages
import { AppComponent } from './app.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { FaqpageComponent } from './faqpage/faqpage.component';
import { HomepageComponent } from './homepage/homepage.component';



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
    // MatSliderModule,
    MatExpansionModule,
    // MatSidenavModule,
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

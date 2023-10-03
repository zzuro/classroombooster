import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { OfferComponent } from './components/offer/offer.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatListModule} from "@angular/material/list";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DialogComponent,
    FooterComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }

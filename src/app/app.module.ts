import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { DataTablesModule } from "angular-datatables";
import {MatTableModule} from '@angular/material/table';

import {NgxPaginationModule} from 'ngx-pagination'; 


import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    DataTablesModule,
    MatTableModule,
    NgxPaginationModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

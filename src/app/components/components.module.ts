import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';

/*MODULOS*/
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';


/*ESTILOS - ANGULAR*/
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from "angular-datatables";
import {MatTableModule} from '@angular/material/table';


/*PAGUINAS*/
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'environments/environment';

import { OngComponent } from './slider/ong/ong.component';
import { EjesComponent } from './slider/ejes/ejes.component';
import { ActividadesComponent } from './slider/actividades/actividades.component';
import { BeneficiosComponent } from './slider/beneficios/beneficios.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { FromHomeComponent } from './froms/from-home/from-home.component';
import { FromVolunteersComponent } from './froms/from-volunteers/from-volunteers.component';
import { TableVoluntariosComponent } from './table-voluntarios/table-voluntarios.component';
import {MatButtonModule} from '@angular/material/button';
import { MatTableExporterModule } from 'mat-table-exporter';
import {NgxPaginationModule} from 'ngx-pagination';

import { YouTubePlayerModule } from "@angular/youtube-player";
import { PaymentsComponent } from './payments/payments.component';
import { TableAboutUsComponent } from './table-about-us/table-about-us.component';
import { FromServicesComponent } from './froms/from-services/from-services.component';
import { FromAboutUsComponent } from './froms/from-about-us/from-about-us.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        MatInputModule, 
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, 
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AngularFireAuthModule,
        DataTablesModule, 
        MatTableModule,
        MatButtonModule,
        MatTableExporterModule,
        NgxPaginationModule,
        YouTubePlayerModule,
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        HomeComponent,
        LoginComponent,
        OngComponent,
        EjesComponent,
        ActividadesComponent,
        BeneficiosComponent,
        AboutUsComponent,
        ServicesComponent,
        FromHomeComponent,
        FromVolunteersComponent,
        TableVoluntariosComponent,
        PaymentsComponent,
        TableAboutUsComponent,
        FromServicesComponent,
        FromAboutUsComponent,
        
 

        
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }

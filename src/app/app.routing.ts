import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

/*PAGUINAS*/
import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from '../app/components/login/login.component';

import { OngComponent } from '../app/components/slider/ong/ong.component';
import { EjesComponent } from '../app/components/slider/ejes/ejes.component';
import { ActividadesComponent } from '../app/components/slider/actividades/actividades.component';
import { BeneficiosComponent } from '../app/components/slider/beneficios/beneficios.component';


import { AboutUsComponent } from '../app/components/about-us/about-us.component';
import { ServicesComponent } from '../app/components/services/services.component';

import { FromHomeComponent } from '../app/components/froms/from-home/from-home.component';
import { FromVolunteersComponent } from '../app/components/froms/from-volunteers/from-volunteers.component';
import { TableVoluntariosComponent } from '../app/components/table-voluntarios/table-voluntarios.component';



const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },


    { path: 'inicio',             component: HomeComponent},
    
    { path: 'login',              component: LoginComponent},
    { path: 'ong',                component: OngComponent},
    { path: 'ejes',               component: EjesComponent},
    { path: 'actividades',        component: ActividadesComponent},
    { path: 'beneficios',         component: BeneficiosComponent},

    { path: 'home',             component: HomeComponent},


    
    { path: 'from-home',        component: FromHomeComponent, canActivate:[AngularFireAuthGuard]},
    { path: 'editFrom/:id',     component: FromHomeComponent,  canActivate:[AngularFireAuthGuard]   },
    { path: 'from-volunteers',  component: FromVolunteersComponent},

    { path: 'login',            component: LoginComponent},
    { path: 'about-us',         component: AboutUsComponent},
    { path: 'services',         component: ServicesComponent},

    { path: 'table-volunteers',            component: TableVoluntariosComponent, canActivate:[AngularFireAuthGuard] },
    { path: 'editFromVolunteers/:id',            component: FromVolunteersComponent, canActivate:[AngularFireAuthGuard] },


   
    { path: 'inicio',           component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },

    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

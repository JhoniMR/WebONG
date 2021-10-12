import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

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
import { FromServicesComponent } from './components/froms/from-services/from-services.component';
import { TableVoluntariosComponent } from '../app/components/table-voluntarios/table-voluntarios.component';
import { PaymentsComponent } from '../app/components/payments/payments.component';
import { GuardLoginGuard } from './data/guard-login.guard';
import { TableAboutUsComponent } from './components/table-about-us/table-about-us.component';

import { FromAboutUsComponent } from './components/froms/from-about-us/from-about-us.component';
import { FromAwardComponent } from './components/froms/from-award/from-award.component';
import { FromOngComponent } from './components/froms/from-ong/from-ong.component';
import { FromEjesComponent } from './components/froms/from-ejes/from-ejes.component';
import { FromActividadesComponent } from './components/froms/from-actividades/from-actividades.component';
import { FromAbeneficiosComponent } from './components/froms/from-abeneficios/from-abeneficios.component';
import { ErrordesarrolloComponent } from './components/errordesarrollo/errordesarrollo.component';
import { FromVoluntarypaymentsComponent } from './components/froms/from-voluntarypayments/from-voluntarypayments.component';
import { TablaPagosComponent } from './components/tabla-pagos/tabla-pagos.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },

  
    { path: '404',             component: ErrordesarrolloComponent},
    { path: 'inicio',             component: ComponentsComponent},
    
    { path: 'login',              component: LoginComponent, canActivate:[GuardLoginGuard] },
    { path: 'nuestraOng',                component: OngComponent},
    { path: 'ejesTransversales',               component: EjesComponent},
    { path: 'actividades',        component: ActividadesComponent},
    { path: 'beneficios',         component: BeneficiosComponent},
    { path: 'home',               component: HomeComponent},

    { path: 'payments',           component: PaymentsComponent},
  
    
    { path: 'from-home',        component: FromHomeComponent, canActivate:[AngularFireAuthGuard]},
    { path: 'editFrom/:id',     component: FromHomeComponent,  canActivate:[AngularFireAuthGuard]},

    { path: 'from-volunteers',  component: FromVolunteersComponent},
    { path: 'from-volunteerspayments',  component: FromVoluntarypaymentsComponent},
    { path: 'tablapayments',  component: TablaPagosComponent, canActivate:[AngularFireAuthGuard]},
    
    

    { path: 'from-services',    component: FromServicesComponent, canActivate:[AngularFireAuthGuard]},
    { path: 'from-services/:id',    component: FromServicesComponent, canActivate:[AngularFireAuthGuard]},

    { path: 'from-aboutUs',        component: FromAboutUsComponent, canActivate:[AngularFireAuthGuard]},
    { path: 'from-aboutUs/:id',    component: FromAboutUsComponent, canActivate:[AngularFireAuthGuard]},
    
    { path: 'from-award',        component: FromAwardComponent, canActivate:[AngularFireAuthGuard]},
    { path: 'from-award/:id',    component: FromAwardComponent, canActivate:[AngularFireAuthGuard]},

    { path: 'from-ong',        component: FromOngComponent, canActivate:[AngularFireAuthGuard]},
    { path: 'from-ong/:id',    component: FromOngComponent, canActivate:[AngularFireAuthGuard]},

    { path: 'from-ejes',        component: FromEjesComponent, canActivate:[AngularFireAuthGuard]},
    { path: 'from-ejes/:id',    component: FromEjesComponent, canActivate:[AngularFireAuthGuard]},

    { path: 'from-actividades',        component: FromActividadesComponent, canActivate:[AngularFireAuthGuard]},
    { path: 'from-actividades/:id',    component: FromActividadesComponent, canActivate:[AngularFireAuthGuard]},

    { path: 'from-beneficios',        component: FromAbeneficiosComponent, canActivate:[AngularFireAuthGuard]},
    { path: 'from-beneficios/:id',    component: FromAbeneficiosComponent, canActivate:[AngularFireAuthGuard]},

    { path: 'about-us',      component: AboutUsComponent},
    { path: 'services',      component: ServicesComponent},

    { path: 'table-volunteers',         component: TableVoluntariosComponent, canActivate:[AngularFireAuthGuard] },
    { path: 'table-about',              component: TableAboutUsComponent, canActivate:[AngularFireAuthGuard] },
    { path: 'editFromVolunteers/:id',   component: FromVolunteersComponent, canActivate:[AngularFireAuthGuard] },

    
   
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
      useHash: true,
      preloadingStrategy: PreloadAllModules // estrateguia de precarga
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

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
import { AboutUsComponent } from '../app/components/about-us/about-us.component';
import { ServicesComponent } from '../app/components/services/services.component';

import { FromHomeComponent } from '../app/components/froms/from-home/from-home.component';
import { FromVolunteersComponent } from '../app/components/froms/from-volunteers/from-volunteers.component';


const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home',             component: HomeComponent},

    
    { path: 'from-home',        component: FromHomeComponent, canActivate:[AngularFireAuthGuard]},
    { path: 'editFrom/:id',     component: FromHomeComponent,  canActivate:[AngularFireAuthGuard]   },
    { path: 'from-volunteers',  component: FromVolunteersComponent},

    { path: 'login',            component: LoginComponent},
    { path: 'about-us',         component: AboutUsComponent},
    { path: 'services',         component: ServicesComponent},


   
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

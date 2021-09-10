import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

/*PAGUINAS*/
import { HomeComponent } from '../app/components/home/home.component';
import { FromComponent } from '../app/components/from/from.component';
import { LoginComponent } from '../app/components/login/login.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';


const routes: Routes =[
    { path: '', redirectTo: 'from', pathMatch: 'full' },

    { path: 'inicio',             component: HomeComponent},
    { path: 'from',               component: FromComponent,  canActivate:[AngularFireAuthGuard]   },
    { path: 'editFrom/:id',       component: FromComponent,  canActivate:[AngularFireAuthGuard]   },
    { path: 'login',              component: LoginComponent},

    
    { path: 'home',             component: ComponentsComponent },
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

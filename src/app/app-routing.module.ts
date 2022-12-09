import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroefetuadoComponent} from '../app/cadastroefetuado/cadastroefetuado.component'
import {LoginComponent} from '../app/login/login.component'
import {LogarComponent} from '../app/logar/logar.component'
import { PosloginComponent } from './poslogin/poslogin.component';
import { AppComponent } from './app.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logar',
    component: LogarComponent,

  },
  {
    path: 'poslogin',
    component: PosloginComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'cadastroefetuado',
    component: CadastroefetuadoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

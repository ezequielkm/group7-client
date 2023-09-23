import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { Movimentacao } from './_models/movimentacao';
import { GitAuthComponent } from './git-auth/git-auth.component';
import { ExtUrlResolverService } from './ext-url-resolver.service';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: AddAccountComponent, canActivate: [AuthGuard]},
  { path: 'users', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'estoque', component: EstoqueComponent, canActivate: [AuthGuard] },
  { path: 'movimentacao', component: Movimentacao, canActivate: [AuthGuard]},
  { path: 'test', component: GitAuthComponent , resolve: { ExtUrlResolverService }},
  { path: 'redirect', component: RedirectComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

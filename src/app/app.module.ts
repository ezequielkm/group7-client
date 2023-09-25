import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { EstoqueComponent } from './estoque/estoque.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { GitAuthComponent } from './git-auth/git-auth.component';
import { RedirectComponent } from './redirect/redirect.component';
import { SaldoEstoqueComponent } from './saldo-estoque/saldo-estoque.component';
import { MovimentarComponent } from './movimentar/movimentar.component';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EstoqueComponent,
    AddAccountComponent,
    MovimentacaoComponent,
    GitAuthComponent,
    RedirectComponent,
    SaldoEstoqueComponent,
    MovimentarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: [
    MovimentarComponent
  ]
})
export class AppModule { }

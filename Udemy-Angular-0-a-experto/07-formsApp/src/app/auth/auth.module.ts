import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ResgisterPageComponent } from './pages/resgister-page/resgister-page.component';


@NgModule({
  declarations: [
    ResgisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

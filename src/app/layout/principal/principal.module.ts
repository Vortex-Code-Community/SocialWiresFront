import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { AllMessagesComponent } from './all-messages/all-messages.component';


@NgModule({
  declarations: [
    AllMessagesComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }

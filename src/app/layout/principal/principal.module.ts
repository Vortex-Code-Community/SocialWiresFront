import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { AllMessagesComponent } from './all-messages/all-messages.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    AllMessagesComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    CoreModule
  ],
  providers: [
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrincipalModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllMessagesComponent } from "./all-messages/all-messages.component";

const routes: Routes = [{ path: "all-messages", component: AllMessagesComponent }, {path: "**", redirectTo: "all-messages"}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalRoutingModule {}

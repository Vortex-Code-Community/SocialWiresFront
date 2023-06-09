import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "feature",
    loadChildren: () =>
      import("./layout/principal/principal.module").then(
        (m) => m.PrincipalModule
      ),
  }, {path: "**", redirectTo: "feature"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

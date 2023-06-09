import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "feature",
    loadChildren: () =>
      import("./layout/principal/principal.module").then(
        (m) => m.PrincipalModule
      ),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./layout/auth/auth.module").then(
        (m) => m.AuthModule
      ),
  }, {path: "**", redirectTo: "auth"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

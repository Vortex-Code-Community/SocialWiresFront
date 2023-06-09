import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "SocialWiresFront";
  noShowNavbarIn = new Set<string>(["/auth/signup", "/auth/signin"]); // set que no guarda

  constructor(private router: Router) {}

  /**
   * ShowNavbar
   * @description mostrar o no el navbar
   * @example si la ruta es = /auth/signup = false 
   * @returns  false en caso de que estemos en una ruta que no se puede mostrar el navbar y true en caso de que si se pueda mostrar el navbar
   */
  showNavbar(): boolean {
    const currentUrl = this.router.url;
    return !this.noShowNavbarIn.has(currentUrl);
  }


}

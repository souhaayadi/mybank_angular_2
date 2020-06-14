import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return this.checkLogin();
  }

  checkLogin(): boolean {
    let userRole = localStorage.getItem('user');
    if (userRole != null) {

      return true;

    } else {
      return false;
    }
  }

}

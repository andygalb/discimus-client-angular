import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

        if (!this.userService.isUserLoggedIn) {
          this.router.navigate(['login']);
          return false;
        }

        if (!route.data.expectedRoles.includes(this.userService.user.local.userType)) {
          this.router.navigate(['login']);
          return false;
        }

        return true;
  }
}

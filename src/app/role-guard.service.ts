import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    if (!this.userService.isUserLoggedIn) {
      // Does the user exist in local storage? In that case log the user in again...
      const user = localStorage.getItem('user');
      if (user != null) {
        this.userService.user = JSON.parse(user);
        this.userService.isUserLoggedIn = true;
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }

    if (!route.data.expectedRoles.includes(this.userService.user.local.userType)) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}

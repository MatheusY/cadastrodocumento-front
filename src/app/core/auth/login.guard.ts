import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { UserService } from 'app/core/services';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(this.userService.isLogged()){
            this.router.navigate(['user', this.userService.getUserName()])
            return false;
        }
        return true;
    }
}
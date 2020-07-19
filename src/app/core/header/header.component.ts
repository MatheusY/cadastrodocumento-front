import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<User>;

    display = false;

    constructor(
        private userService: UserService,
        private router: Router
    ){
        this.user$ = userService.getUser();
        this.user$.subscribe(u => console.log(u));
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }
    
    onClick(){
        console.log('Clicou');
        this.display = !this.display;
    }
}
import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'app/shared/components/models';
import { UserService } from 'app/core/services';
import { MenuItem } from 'primeng/primeng';
import { map } from 'rxjs/operators';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{

    user$: Observable<User>;

    display = false;

    nomeUsuario: string;

    items: MenuItem[];

    constructor(
        private userService: UserService,
        private router: Router
    ){
        this.user$ = userService.getUser();
    }

    ngOnInit(): void {
        this.user$.subscribe(u => {
            this.items = [
                {
                    id: 'usuario',
                    label: u ? u.usuario : null,
                    icon: 'pi pi-user',
                    items: [
                        {
                            id: 'perfil',
                            label: 'Perfil',
                            icon: 'pi pi-pencil',
                            command: () => this.onPerfil(),
                        },
                        {
                            id: 'logout',
                            label: 'Sair',
                            icon: 'pi pi-sign-out',
                            command: () => this.logout(),
                        }
                    ]
                },
            ]

        });
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }
    
    onClick(){
        this.display = !this.display;
    }

    onPerfil(){

    }
}
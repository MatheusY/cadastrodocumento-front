import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'app/shared/components/models';
import { UserService } from 'app/core/services';
import { MenuItem } from 'primeng/primeng';

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
    itemsMenu: MenuItem[];

    constructor(
        private userService: UserService,
        private router: Router
    ){
        this.user$ = this.userService.findUsuarioLogado();
    }

    ngOnInit(): void {
        this.userService.getUser().subscribe(() => {
            this.user$ = this.userService.findUsuarioLogado();
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
                                id: 'senha',
                                label: 'Trocar senha',
                                icon: 'pi pi-key',
                                command: () => this.onUpdatePassword(),
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
        });
        this.itemsMenu = [
            {
                id: 'modelo',
                label: 'Modelo',
                command: () => this.redirecionar('modelo'),

            }
        ]

        
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }

    redirecionar(local: string) {
        this.router.navigate([local]);
        this.onClick();
    }
    
    onClick(){
        this.display = !this.display;
    }

    onPerfil(){
        this.user$.subscribe(u => this.router.navigate(['/', 'usuario', u.id, 'visualizar']));
    }

    onUpdatePassword(){
        this.router.navigate(['usuario', 'trocar-senha']);
    }
}
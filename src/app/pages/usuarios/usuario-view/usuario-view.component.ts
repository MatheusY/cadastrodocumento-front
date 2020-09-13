import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessagesService, UserService } from 'app/core/services';
import { Observable } from 'rxjs';
import { User } from 'app/shared/components/models';

@Component({
    selector: 'usuario-view',
    templateUrl: './usuario-view.component.html',
})
export class UsuarioViewComponent implements OnInit{

    usuario$: Observable<User>;
    
    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected messagesService: MessagesService,
        private userService: UserService,
    ) {}

    ngOnInit(): void {
        this.usuario$ = this.userService.findUsuarioLogado();
    }

    onEdit(event) {
        
    }

}
import { OnInit, Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

    fromUrl: string;

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ){}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params['fromUrl'])
        this.loginForm = this.formBuilder.group({
            usuario: ['', Validators.required],
            senha: ['', Validators.required]
        });
        this.userNameInput.nativeElement.focus();
    }

    login(){
        const usuario = this.loginForm.get('usuario').value;
        const senha = this.loginForm.get('senha').value;

        this.authService
            .authenticate(usuario, senha)
            .subscribe(
                () => this.fromUrl
                        ? this.router.navigateByUrl(this.fromUrl)
                        : this.router.navigate(['user', usuario])
                ,
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    alert('Usuário ou senha inválido!');
                }
            );
    }

}
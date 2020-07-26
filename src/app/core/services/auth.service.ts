import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { environment } from 'environments/environment';

const API_URL = environment.ApiUrl;

@Injectable({
    providedIn : 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private userService: UserService) { }
    
    authenticate(usuario: string, senha: string){
        console.log(usuario);
        return this.http
            .post(API_URL + '/auth',
            { usuario, senha },
            {responseType: 'text'})
            .pipe(tap(res => {
                const authToken = res;
                this.userService.setToken(authToken);
                console.log(`User ${usuario} authenticated with token ${authToken}`);
            }));
    }
}
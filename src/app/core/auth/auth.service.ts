import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { environment } from 'src/environments/environment';

const API_URL = '/api';

@Injectable({
    providedIn : 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private userService: UserService) { }
    
    authenticate(usuario: string, senha: string){
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
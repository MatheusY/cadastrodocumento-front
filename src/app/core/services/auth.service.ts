import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { environment } from 'environments/environment';

const API_URL = environment.ApiUrl;

@Injectable({
    providedIn : 'root'
})
export class AuthService {

    url: string;

    constructor(
        private http: HttpClient,
        private userService: UserService) { 
            this.url = API_URL + '/auth/';
        }
    
    authenticate(usuario: string, senha: string){
        return this.http
            .post(this.url,
            { usuario, senha },
            {responseType: 'text'})
            .pipe(tap(res => {
                const authToken = res;
                this.userService.setToken(authToken);
                console.log(`User ${usuario} authenticated with token ${authToken}`);
            }));
    }

    validaEmail(id: string, key: string){
        const headers = new HttpHeaders({
            'Content-type': 'application/json; charset=utf-8'
        });
        return this.http.patch(this.url + 'validar-email/' + id + '?key=' + key, { headers });
    }
}
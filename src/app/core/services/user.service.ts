import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'app/shared/components/models';
import { TokenService } from '../token/token.service';

import * as jtw_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

const url = `${environment.ApiUrl}/usuario/`
@Injectable({ providedIn: 'root'})
export class UserService {
    private userSubject = new BehaviorSubject<User> (null);
    private usuario: string;

    constructor(private tokenService: TokenService, private http: HttpClient){
        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(){
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jtw_decode(token) as User;
        this.usuario = user.usuario;
        this.userSubject.next(user);
    }

    logout(){
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName(){
        return this.usuario;
    }

    findUsuarioLogado(): Observable<User> {
        return this.http.get<User>(url);
    }

}
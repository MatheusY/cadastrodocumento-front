import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import * as jtw_decode from 'jwt-decode';

import { User, Token } from 'app/shared/components/models';
import { TokenService } from '../token/token.service';
import { environment } from 'environments/environment';
import { AbstractService } from './abstract.service';

const url = `${environment.ApiUrl}/usuario`;

@Injectable({ providedIn: 'root'})
export class UserService extends AbstractService<User, number>{
    private userSubject = new BehaviorSubject<User> (null);
    private usuario: string;
    private user;

    constructor(
        private tokenService: TokenService, 
        protected http: HttpClient,){
        super(url, http);
        this.tokenService.hasToken() && this.decodeAndNotify();
        this.findUsuarioLogado().subscribe(u => this.setusuarioLogado(u));
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
        this.setusuarioLogado(null);
        this.userSubject.next(null);
    }

    isLogged() {
        if(this.tokenService.hasToken()) {
            const decodedToken = jtw_decode(this.tokenService.getToken());
            const tempoAtual = (Math.floor((new Date).getTime() / 1000));
            if(tempoAtual >= decodedToken.exp){
                this.logout();
            }
            return true;
        }
        return false;
    }


    getUserName(){
        return this.usuario;
    }

    setusuarioLogado(user: User): void {
        this.user = user;
    }

    getUsuarioLogado(): User{
        return this.user;
    }

    findUsuarioLogado(): Observable<User> {
        const endpointUrl = `${url}/perfil`;
        return this.http.get<User>(endpointUrl);
    }

    updateUser(model: User): Observable<Token> {
        const headers = new HttpHeaders({
            'Content-type': 'application/json; charset=utf-8'
        });
        const endpointUrl = `${url}/${model.id}`;
        return this.http.put<Token>(endpointUrl, model, { headers });
    }

    updatePassword(model: User) {
        const headers = new HttpHeaders({
            'Content-type': 'application/json; charset=utf-8'
        });
        const endpointUrl = `${url}/trocar-senha`;
        return this.http.patch(endpointUrl, model, { headers })
    }

}
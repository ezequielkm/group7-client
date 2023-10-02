import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User } from 'app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.getValue();
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }
    loginGit(username: string, email: string) {
        return this.http.post(environment.apiUrl + '/users/authenticateGit', { username, email })  .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
    }

    logout() {
        if (this.userValue) {
            this.http.post(environment.apiUrl + '/users/logout', {}).subscribe();
            // remove user from local storage to log user out
            localStorage.removeItem('user');
            this.userSubject.next(null);
            this.router.navigate(['/login']);        
        }
    }
    GetAuthPage(): Observable<string> {
        return this.http.get<string>(environment.apiUrl + '/users/AuthPage');
    }

    getAcessToken(auth_code: string) {
        return this.http.post(environment.apiUrl + '/users/getAccessToken', { code: auth_code });
    }
    getUserDetails(): Observable<any> {
        return this.http.get<any>(environment.apiUrl + '/users/getUserDetails');
    }
}
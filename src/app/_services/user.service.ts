import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { Account } from 'app/_models/account';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Account[]>(`${environment.apiUrl}/users`);
    }

    create(data: any): Observable<any> {
      return this.http.post(`${environment.apiUrl}/users`, data);
    }

    delete(data: any): Observable<any> {
      return this.http.delete(`${environment.apiUrl}/users/${data.id}`);
    }
}

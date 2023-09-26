import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { Account } from 'app/_models/account';
import { Role } from 'app/_models/role';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Account[]>(`${environment.apiUrl}/users`);
  }

  getRoles() {
    return this.http.get<Role[]>(`${environment.apiUrl}/users/roles`);
  }

  getUser(data: any): Observable<any> {
    return this.http.get<Account>(`${environment.apiUrl}/users/user/${data.id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users`, data);
  }

  delete(data: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/users/${data.id}`);
  }

  edit(data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/users/${data.user_id}`, data);
  }
}

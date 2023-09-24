import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { Movimentacao } from 'app/_models/movimentacao';

@Injectable({ providedIn: 'root' })
export class MovimentacaoService {
    constructor(private http: HttpClient) { }

    getAll() {
      return this.http.get<Movimentacao[]>(`${environment.apiUrl}/movimentacao`);
    }

    create(data: any): Observable<any> {
      return this.http.post(`${environment.apiUrl}/movimentacao`, data);
    }

    delete(data: any): Observable<any> {
      console.log("DATA_ID: " + data.id);
      return this.http.delete(`${environment.apiUrl}/movimentacao/${data.id}`, { responseType: 'text' });
    }

    edit(data: any): Observable<any> {
      console.log("DATA_ID: " + data.id);
      return this.http.put(`${environment.apiUrl}/movimentacao/${data.id}'}`, data);
    }
}

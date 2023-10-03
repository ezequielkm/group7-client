import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { Produto } from 'app/_models/produto';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Produto[]>(`${environment.apiUrl}/produto`);
    }

    create(data: any): Observable<any> {
      return this.http.post(`${environment.apiUrl}/produto`, data);
    }

    update(data: any): Observable<any> {
      return this.http.post(`${environment.apiUrl}/produto/${data.id}`, data);
    }

    delete(data: any): Observable<any> {
      return this.http.delete(`${environment.apiUrl}/produto/${data.id}`);
    }

    getProduto(data: any): Observable<any> {
      console.log("AAAAA 1: " + data.id);
      return this.http.get<Produto>(`${environment.apiUrl}/produto/produto/${data.id}`);
    }
}

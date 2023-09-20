import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { Estoque } from 'app/_models/estoque';


@Injectable({ providedIn: 'root' })
export class EstoqueService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Estoque[]>(`${environment.apiUrl}/estoque`);
    }

    create(data: any): Observable<any> {
      return this.http.post(`${environment.apiUrl}/estoque`, data);
    }
}

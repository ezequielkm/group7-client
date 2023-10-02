import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from 'app/_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401].includes(err.status)) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.authenticationService.logout();
            }
            if ([403].includes(err.status)) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                alert("Você não tem permissão para executar esta ação, solicite ao administrador do sistema.")
            }
            if ([0].includes(err.status)) {
                alert("Não foi possível conectar ao servidor, tente novamente mais tarde.")
            }
            if ([400].includes(err.status)) {
                alert(err.error.message);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
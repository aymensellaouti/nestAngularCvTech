import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AuthIterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const newReq = req.clone(
        {headers}
      );
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}

export const AuthentificationInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthIterceptor,
  multi: true
};

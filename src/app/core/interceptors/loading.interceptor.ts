import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
@Injectable()
export class LoadingInterceptor implements HttpInterceptor{
  constructor(private auth:AuthService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.auth.setLoading(true);
    return next.handle(req).pipe(finalize(()=> this.auth.setLoading(false)));
  }
}

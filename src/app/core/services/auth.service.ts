import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({providedIn:'root'})
export class AuthService{
  private _loading = new BehaviorSubject<boolean>(false);
  loading$ = this._loading.asObservable();
  setLoading(v:boolean){ this._loading.next(v); }
  isLoggedIn(){ return !!localStorage.getItem('token'); }
  login(token:string){ localStorage.setItem('token', token); }
  logout(){ localStorage.removeItem('token'); }
}

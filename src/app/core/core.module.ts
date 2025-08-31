import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {ErrorInterceptor} from './interceptors/error.interceptor';
import {LoadingInterceptor} from './interceptors/loading.interceptor';
@NgModule({
  imports:[HttpClientModule],
  providers:[AuthService,
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}]
})
export class CoreModule{
  constructor(@Optional() @SkipSelf() parent?: CoreModule){
    if(parent){ throw new Error('CoreModule already loaded. Import in AppModule only.'); }
  }
}

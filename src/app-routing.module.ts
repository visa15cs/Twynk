import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import {UnsavedChangesGuard} from './core/guards/unsaved-changes.guard';

const routes: Routes = [
  {path:'login', loadChildren: ()=>import('./features/login/login.module').then(m=>m.LoginModule)},
  {path:'dashboard', loadChildren: ()=>import('./features/dashboard/dashboard.module').then(m=>m.DashboardModule), canActivate:[AuthGuard]},
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports:[RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports:[RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {ColorComponent} from './color/color.component';
import {CvComponent} from './cv/cv/cv.component';
import {DetailComponent} from './cv/detail/detail.component';
import {TestRoutesParamsComponent} from './test-routes-params/test-routes-params.component';
import {DetailPersonneComponent} from './cv/detail-personne/detail-personne.component';
import {NF404Component} from './nf404/nf404.component';
import {LoginComponent} from './login/login.component';
import {AddPersonneComponent} from './cv/add-personne/add-personne.component';
import {AuthGuardGuard} from './guards/auth-guard.guard';


const routes: Routes = [
  {path: '', component: CvComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cv', redirectTo: '', pathMatch: 'full'},
  {path: 'cv/add', component: AddPersonneComponent, canActivate: [AuthGuardGuard]},
  {path: 'cv/:id', component: DetailPersonneComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'color', component: ColorComponent},
  {path: 'test/:name/:id', component: TestRoutesParamsComponent},
  {path: '**', component: NF404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

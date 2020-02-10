import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/listEmployees/listEmployees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';

 const routesRef: Routes = [
  { path:'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path:'', redirectTo: '/list', pathMatch:'full'},
  { path:'**', component: ListEmployeesComponent }
  // { path:'**', redirectTo: '/list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routesRef)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

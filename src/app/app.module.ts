import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './Trident/child/child.component';
import { HomepageComponent } from './Trident/homepage/homepage.component';
import { ListEmployeesComponent } from './employees/listEmployees/listEmployees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { DummyComponent } from './dummy/dummy.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomepageComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    UserComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

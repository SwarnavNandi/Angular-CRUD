import { Component, OnInit } from '@angular/core';
import {  Employee } from '../models/employee.model';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  constructor() { }
 
   employees: Employee [] = [
     {
       id: 101,
       name: 'Swarnav',
       gender: 'Male',
       email: 'nandiswarnav@gmail.com',
       phoneNumber: 7205214664,
       contactPreference: 'Email',
       dateOfBirth: new Date('01/15/1994'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/male1.jpg',
     },
    {
      id: 102,
      name: 'Pooja',
      gender: 'Female',
      email: 'pooja@gmail.com',
      phoneNumber: 7205679990,
     contactPreference: 'Email',
     dateOfBirth: new Date('01/08/1994'),
     department: 'IT',
     isActive: true,
     photoPath: 'assets/images/female4.jpg',
    },
    
    {
      id: 103,
      name: 'Sibashis',
      gender: 'Male',
      email: 'getsibashis@gmail.com',
      phoneNumber: 8667331522,
     contactPreference: 'Email',
     dateOfBirth: new Date('03/10/1994'),
     department: 'IT',
     isActive: true,
     photoPath: 'assets/images/male2.jpg',
    },   
   ];
  ngOnInit() {
  }

}

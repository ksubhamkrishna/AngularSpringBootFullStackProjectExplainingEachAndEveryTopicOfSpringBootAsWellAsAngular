import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../pipe/na-pipe';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor,UpperCasePipe,LowerCasePipe,JsonPipe,DatePipe,NaPipe],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css',
})
export class NgForComponent {

  courseName: string = "Angular";
  studentObj:any={
    name:"Subham",
    city:'Bangalore',
    mobile: '1122334455'

  }

  currentDate:Date=new Date();

  cityList: string[] = ["Pune", "Nagpur", "Jaipur", "Mumbai", "Thane"]

  employeeArray: any[] = [
    { empId: 121,city: 'Pune', contactNo: '1111111111' },
    { empId: 122, name: 'Abc', city: 'Nagpur', contactNo: '2222222222' },
    { empId: 123, name: null, city: 'Jaipur', contactNo: '3333333333' },
    { empId: 124, name: 'Abc', city: 'Mumbai', contactNo: '4444444444' },
    { empId: 125, name: '', city: 'Thane', contactNo: '5555555555' }
  ]
}

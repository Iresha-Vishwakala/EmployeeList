import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(public EmployeeService: EmployeeService) { }

  ngOnInit() {
    this.EmployeeService.getAll().subscribe((data: Employee[]) => {
      console.log(data);
      this.employees = data;
    })
  }

}

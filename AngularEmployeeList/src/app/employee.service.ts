import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServer = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable< Employee[] >{
    return this.httpClient.get< Employee[] >(this.apiServer+'/employee_list');
  }
}

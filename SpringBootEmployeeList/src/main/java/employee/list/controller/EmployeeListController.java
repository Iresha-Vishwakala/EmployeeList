package employee.list.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import employee.list.model.Employee;
import employee.list.service.EmployeeListService;

@RestController
public class EmployeeListController {

	@Autowired
	private EmployeeListService service;
	
	// list all employees
	@GetMapping("/employee_list")
	public List<Employee> getEmployees(){
		return service.getAllEmployees();
	}
}

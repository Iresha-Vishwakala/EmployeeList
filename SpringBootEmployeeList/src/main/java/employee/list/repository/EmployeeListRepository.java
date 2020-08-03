package employee.list.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import employee.list.model.Employee;

public interface EmployeeListRepository extends JpaRepository<Employee, Long>{

}

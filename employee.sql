CREATE DATABASE EmployeeManagement;
USE EmployeeManagement;

CREATE TABLE employee(
id bigint not null auto_increment,
name varchar(50),
age int,
PRIMARY KEY(id)
);

insert into employee (name, age) value ("testName", 10);
select * from employee;

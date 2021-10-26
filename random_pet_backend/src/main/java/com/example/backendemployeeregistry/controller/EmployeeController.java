package com.example.backendemployeeregistry.controller;

import com.example.backendemployeeregistry.entity.Employee;
import com.example.backendemployeeregistry.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//This is to allow calls from React... NOT IMPORTANT RIGHT NOW
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class EmployeeController {

    private final EmployeeService employeeService;

    //Constructor Injection: this is telling the spring framework to wire up your
    //dependencies for the employeeService.
    @Autowired
    public EmployeeController(@Qualifier("employeeServiceIMPL")EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    //This is a GET request that will read a list of all the employees.
    //http://localhost:8080/retrieveAllEmployees
    @GetMapping("/retrieveAllEmployees")
    public List<Employee> findAll() {
        return employeeService.findAll();
    }

    //This is a POST request to add a new employee.
    //http://localhost:8080/addEmployee
    @PostMapping("/addEmployee")
    public Employee addEmployee(@RequestBody Employee theEmployee) {
        //also, just in case they pass an id in JSON .... set id to 0
        //this is to force a save of new item .... instead of update
        theEmployee.setId(0);

        //This will call the employeeDqoImpl.save method to save a new employee
        //through the employeeService
        employeeService.saveOrUpdate(theEmployee);
        return theEmployee;
    }

    //This is a PUT request to update an existing employee.
    //http://localhost:8080/updateEmployee
    @PutMapping("/updateEmployee")
    public Employee updateEmployee(@RequestBody Employee updateEmployee) {
        //Notice theEmployee.setId(0); this will execute an update instead of a create
        employeeService.saveOrUpdate(updateEmployee);
        return updateEmployee;
    }

    //This is a DELETE request to delete an existing employee.
    //http://localhost:8080/deleteEmployee/1
    @DeleteMapping("/deleteEmployee/{employeeId}")
    public String deleteEmployee(@PathVariable int employeeId) {
        //This will execute the deleteByID.
        employeeService.deleteById(employeeId);
        return "Deleted employee id : " + employeeId;
    }

}

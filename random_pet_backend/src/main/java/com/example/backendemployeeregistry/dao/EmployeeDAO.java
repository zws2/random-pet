package com.example.backendemployeeregistry.dao;

import com.example.backendemployeeregistry.entity.Employee;

import java.util.List;

public interface EmployeeDAO {
    List<Employee> findAll();
    Object findById(int theId);
    void saveOrUpdate(Employee theEmployee);
    void deleteById(int theId);
}

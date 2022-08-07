package com.simdev.employee.services;

import com.fasterxml.jackson.databind.util.BeanUtil;
import com.simdev.employee.enity.EmployeeEntity;
import com.simdev.employee.model.Employee;
import com.simdev.employee.repository.EmployeeRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepo employeeRepo;

    public EmployeeServiceImpl(EmployeeRepo employeeRepo){
        this.employeeRepo = employeeRepo;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();

        BeanUtils.copyProperties(employee, employeeEntity);

        employeeRepo.save(employeeEntity);

        return employee;
    }
}

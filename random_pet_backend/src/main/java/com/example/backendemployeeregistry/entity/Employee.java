package com.example.backendemployeeregistry.entity;

import javax.persistence.*;

//Employee Entity
@Entity //This will let Java know that this is an entity that we are going to map to a database table.
@Table(name = "employee") //This is for the actual name of the database table we are mapping to the class.
public class Employee {

    //Define fields
    @Id //This will map the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This will auto increment your primary key
    @Column(name = "id") //This is mapping the primary key to the id column in the table.
    private int id;

    @Column(name = "job_title") //This will map the jobTitle field to the column named job_title in the table.
    private String jobTitle;

    @Column(name = "first_name") //This will map the firstName field to the column named first_name in the table.
    private String firstName;

    @Column(name = "last_name") //This will map the lastName field to the column named last_name in the table.
    private String lastName;

    @Column(name = "email") //This will map the email field to the column named email in the table.
    private String email;

    //default constructor
    public Employee() {
    }

    //para constructor
    public Employee(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    //getter/setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    //ToString Method
    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", jobTitle='" + jobTitle + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}

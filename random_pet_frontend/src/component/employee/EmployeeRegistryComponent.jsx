import React, { Component } from 'react'
import EmployeeDataService from '../../service/EmployeeDataService';

class EmployeeRegistryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.refreshEmployeeRegistry = this.refreshEmployeeRegistry.bind(this)
        this.deleteEmployeeClicked = this.deleteEmployeeClicked.bind(this)
        this.upDateEmployeeClicked = this.upDateEmployeeClicked.bind(this)
        this.addEmployeeClicked = this.addEmployeeClicked.bind(this)
    }

    componentDidMount() {
        this.refreshEmployeeRegistry();
    }

    refreshEmployeeRegistry() {
        EmployeeDataService.retrieveAllEmployees()
        .then(
            response => {
                this.setState({
                    employees: response.data,
                })
            }
        )
    }

    deleteEmployeeClicked(id, firstName, lastName) {
        console.log('Delete Employee Clicked')
        EmployeeDataService.deleteEmployee(id)
        .then(
            response => {
                this.setState({message: `Deleted Employee: ${firstName} ${lastName}`})
                alert(this.state.message)
                this.refreshEmployeeRegistry();
            }
        )
    }
    
    upDateEmployeeClicked(id, jobTitle) {
        console.log('Update Employee Clicked')
        this.props.history.push(`/employee/${id}/${jobTitle}`)
    }

    addEmployeeClicked() {
        console.log('Add AddEmployee Clicked')
        this.props.history.push(`/theEmployee/-1`)
    }
 
   render() {
       return(
           <div className="container">
               <h1 style={{textAlign:"center"}}>Employee Registry</h1><br/>
               <div className="jumbotron"  style={{backgroundColor: "gray", color: "white"}}>
                   <table className="table">
                       <thead>
                           <tr style={{textAlign: "center" , color: "black"}}>
                               <th>Id</th>
                               <th>Job Title</th>
                               <th>First Name</th>
                               <th>Last Name</th>
                               <th>Email</th>
                               <th>Delete</th>
                               <th>Update</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map (
                                   employees => 
                                   <tr style={{textAlign: "center"}} key={employees.id}>
                                       <td>{employees.id}</td>
                                       <td>{employees.jobTitle}</td>
                                       <td>{employees.firstName}</td>
                                       <td>{employees.lastName}</td>
                                       <td>{employees.email}</td>
                                       <td><button className="btn btn-warning" onClick={() => this.deleteEmployeeClicked(employees.id, employees.firstName, employees.lastName)}>Delete</button></td>
                                       <td><button className="btn btn-success" onClick={() => this.upDateEmployeeClicked(employees.id, employees.jobTitle)}>Update</button></td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
                   <div className="row">
                       <br/>
                       <button className="btn btn-success" onClick={this.addEmployeeClicked}>Add Employee</button>
                   </div>
               </div>
           </div>
       )
   } 
}

export default EmployeeRegistryComponent;

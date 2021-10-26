import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import EmployeeDataService from '../../service/EmployeeDataService'

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            jobTitle: this.props.match.params.jobTitle,
            firstName: '',
            lastName: '',
            email: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let employee = {
            id: this.state.id,
            jobTitle: values.jobTitle,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email
        }
            EmployeeDataService.updateEmployee(employee)
            .then(() => this.props.history.push('/EmployeeRegistry'))
    }

    render() {
        let {id, jobTitle, firstName, lastName, email} = this.state
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Update Employee</h3>
                </div>
                <div className="container">
                    <Formik
                        initialValues={{id, jobTitle, firstName, lastName, email}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            () => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset>
                                        <label>Job Title</label>
                                        <Field className="form-control" type="text" name="jobTitle" />
                                    </fieldset>
                                    <fieldset>
                                        <label>First Name</label>
                                        <Field className="form-control" type="text" name="firstName" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Last Name</label>
                                        <Field className="form-control" type="text" name="lastName" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Email</label>
                                        <Field className="form-control" type="text" name="email" />
                                    </fieldset><br/>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        } 
                    </Formik><br/><br/>
                </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent

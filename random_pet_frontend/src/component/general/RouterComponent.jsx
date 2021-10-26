import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComponent from '../header_footer/FooterComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from '../header_footer/HeaderComponent'
import EmployeeRegistryComponent from '../employee/EmployeeRegistryComponent'
import UpdateEmployeeComponent from '../employee/UpdateEmployeeComponent'
import AddEmployee from '../employee/AddEmployee'

class RouterComponent extends Component {
   render() {
       return(
           <div>
            <Router>
                <HeaderComponent />
                    <Switch>
                        <Route exact path="/"><WelcomeComponent name="Everett"/></Route>                       
                        <Route path="/theEmployee/:id" component={AddEmployee} />
                        <Route path="/employee/:id/:jobTitle" component={UpdateEmployeeComponent} />
                        <Route path="/EmployeeRegistry" exact component={EmployeeRegistryComponent} />
                    </Switch>
                <FooterComponent /> 
            </ Router>
            </div>
       )
   } 
}

export default RouterComponent; 

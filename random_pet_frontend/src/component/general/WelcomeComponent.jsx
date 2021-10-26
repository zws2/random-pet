import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: this.props.name
        }
    }
    render() {
        return(
            <div className="container">
                <br/><br/>
                <div className="jumbotron" style={{textAlign:"center", backgroundColor:"Black"}}>
                <h1 style={{color:"Green"}}>Welcome {this.state.name} to the Employee Registry!!!</h1>
                <br/>
                <h2 style={{color:"white"}}>You can manage your employees <Link to="/EmployeeRegistry">here</Link></h2> 
                </div>
            </div>
        )
    }
}
export default WelcomeComponent;  

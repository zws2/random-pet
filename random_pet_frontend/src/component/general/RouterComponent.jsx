import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComponent from '../header_footer/FooterComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from '../header_footer/HeaderComponent'
import PetRegistryComponent from '../pet/PetRegistryComponent'
import UpdatePetComponent from '../pet/UpdatePetComponent'
import AddPet from '../pet/AddPet'

class RouterComponent extends Component {
   render() {
       return(
           <div>
            <Router>
                <HeaderComponent />
                    <Switch>
                        <Route exact path="/"><WelcomeComponent name="Everett"/></Route>                       
                        <Route path="/thePet/:id" component={AddPet} />
                        <Route path="/pet/:id/:title" component={UpdatePetComponent} />
                        <Route path="/PetRegistry" exact component={PetRegistryComponent} />
                    </Switch>
                <FooterComponent /> 
            </ Router>
            </div>
       )
   } 
}

export default RouterComponent; 

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from '../header_footer/HeaderComponent'
import PetRegistryComponent from '../pet/PetRegistryComponent'
import UpdatePetComponent from '../pet/UpdatePetComponent'
import AddPetComponent from '../pet/AddPetComponent'

class RouterComponent extends Component {
   render() {
       return(
           <div>
            <Router>
                <HeaderComponent />
                    <Switch>
                        <Route exact path="/"><WelcomeComponent/></Route>
                        <Route path="/addPet/:id" component={AddPetComponent} />
                        <Route path="/updatePet/:id" component={UpdatePetComponent} />
                        <Route path="/petRegistry" exact component={PetRegistryComponent} />
                    </Switch>
            </ Router>
            </div>
       )
   } 
}

export default RouterComponent; 

import React, { Component } from 'react'
import PetDataService from '../../service/PetDataService';

class PetRegistryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pets: []
        }
        this.refreshPetRegistry = this.refreshPetRegistry.bind(this)
        this.deletePetClicked = this.deletePetClicked.bind(this)
        this.upDatePetClicked = this.upDatePetClicked.bind(this)
        this.addPetClicked = this.addPetClicked.bind(this)
    }

    componentDidMount() {
        this.refreshPetRegistry();
    }

    refreshPetRegistry() {
        PetDataService.retrieveAllPets()
        .then(
            response => {
                this.setState({
                    pets: response.data,
                })
            }
        )
    }

    deletePetClicked(id, firstName, lastName) {
        console.log('Delete Pet Clicked')
        PetDataService.deletePet(id)
        .then(
            response => {
                this.setState({message: `Deleted Pet: ${firstName} ${lastName}`})
                alert(this.state.message)
                this.refreshPetRegistry();
            }
        )
    }
    
    upDatePetClicked(id, jobTitle) {
        console.log('Update Pet Clicked')
        this.props.history.push(`/pet/${id}/${jobTitle}`)
    }

    addPetClicked() {
        console.log('Add AddPet Clicked')
        this.props.history.push(`/thePet/-1`)
    }
 
   render() {
       return(
           <div className="container">
               <h1 style={{textAlign:"center"}}>Pet Registry</h1><br/>
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
                               this.state.pets.map (
                                   pets =>
                                   <tr style={{textAlign: "center"}} key={pets.id}>
                                       <td>{pets.id}</td>
                                       <td>{pets.jobTitle}</td>
                                       <td>{pets.firstName}</td>
                                       <td>{pets.lastName}</td>
                                       <td>{pets.email}</td>
                                       <td><button className="btn btn-warning" onClick={() => this.deletePetClicked(pets.id, pets.firstName, pets.lastName)}>Delete</button></td>
                                       <td><button className="btn btn-success" onClick={() => this.upDatePetClicked(pets.id, pets.jobTitle)}>Update</button></td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
                   <div className="row">
                       <br/>
                       <button className="btn btn-success" onClick={this.addPetClicked}>Add Pet</button>
                   </div>
               </div>
           </div>
       )
   } 
}

export default PetRegistryComponent;

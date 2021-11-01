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
        this.refreshPetRegistry()
        console.log("componentDidMount")
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.pets !== this.state.pets){
            console.log("componentDidUpdate")
        }
    }

    refreshPetRegistry() {
        PetDataService.retrieveAllPets()
        .then(
            response => {
                console.log("response")
                this.setState({
                    pets: response.data,
                })
            }
        )
    }

    deletePetClicked(id, title, caption) {
        console.log('Delete Pet Clicked')
        PetDataService.deletePet(id)
        .then(
            response => {
                this.setState({message: `Deleted Pet: ${title}`})
                alert(this.state.message)
                this.refreshPetRegistry();
            }
        )
    }
    
    upDatePetClicked(pet) {
        console.log('Update Pet Clicked')

        this.props.history.push(`/updatePet/${pet.id}`)
    }

    addPetClicked() {
        console.log('Add AddPet Clicked')
        this.props.history.push(`/addPet/-1`)
    }

   render() {
        console.log("render")
        console.log(this.state.pets)

        return(
           <div className="container">
               <h1 style={{textAlign:"center"}}>Pet Registry</h1><br/>
               <div className="jumbotron"  style={{backgroundColor: "gray", color: "white"}}>
                   <table className="table">
                       <thead>
                           <tr style={{textAlign: "center" , color: "black"}}>
                               <th>Id</th>
                               <th>Title</th>
                               <th>Caption</th>
                               <th>Contributor</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.pets.map (
                                   pet =>
                                   <tr style={{textAlign: "center"}} key={pet.id}>
                                       <td>{pet.id}</td>
                                       <td>{pet.title}</td>
                                       <td>{pet.caption}</td>
                                       <td>{pet.contributor}</td>
                                       <td><button className="btn btn-warning" onClick={() => this.deletePetClicked(pet.id, pet.title, pet.caption)}>Delete</button></td>
                                       <td><button className="btn btn-success" onClick={() => this.upDatePetClicked(pet)}>Update</button></td>
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

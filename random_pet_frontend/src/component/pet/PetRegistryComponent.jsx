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
    
    upDatePetClicked(id, title) {
        console.log('Update Pet Clicked')
        this.props.history.push(`/pet/${id}/${title}`)
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
                               <th>Title</th>
                               <th>Caption</th>
                               <th>Contributor</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.pets.map (
                                   pets =>
                                   <tr style={{textAlign: "center"}} key={pets.id}>
                                       <td>{pets.id}</td>
                                       <td>{pets.title}</td>
                                       <td>{pets.caption}</td>
                                       <td>{pets.contributor}</td>
                                       <td><button className="btn btn-warning" onClick={() => this.deletePetClicked(pets.id, pets.title, pets.caption)}>Delete</button></td>
                                       <td><button className="btn btn-success" onClick={() => this.upDatePetClicked(pets.id, pets.title)}>Update</button></td>
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

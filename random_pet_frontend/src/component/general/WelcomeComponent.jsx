import React, { Component } from 'react';
import PetDataService from '../../service/PetDataService';

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pets: []
        }
        this.refreshPetRegistry = this.refreshPetRegistry.bind(this)
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

    render() {

        const pet = this.state.pets.sort(() => Math.random() - Math.random())
                                               .find(() => true);

        return(         
            <div className="image_container">
            {
                pet &&
                    <div >
                        <h1 style={{textAlign: "center"}}>{pet.title}</h1>
                        <div className="imgbox">
                            
                            <img className="img-fluid center-fit" alt={pet.caption} src={"data:image/png;base64," + pet.img} />
                            {/* <img className="img-circle img-responsive center-fit" alt={pet.caption} src={"data:image/png;base64," + pet.img} /> */}
                        </div>
                        <p style={{textAlign:"center"}}>Caption: {pet.caption}</p>
                        <p style={{textAlign:"center"}}>Contributor: {pet.contributor}</p>
                    </div >
            }
            </div>
        )
    }
}

export default WelcomeComponent;  

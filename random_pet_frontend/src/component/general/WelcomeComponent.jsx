import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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

        const pet = this.state.pets[0];

        return(
            <div>
                <div className="image_container">
                    <h1 style={{textAlign: "center"}}>Cash Money</h1>
                    <div class="imgbox">
                    {
                        pet &&
                            <img class="img-circle img-responsive center-fit" src={"data:image/png;base64," + pet.img} />
                    }
                </div>
                    <p style={{textAlign:"center"}}>this birb is wearing a money hat</p>
                </div>
        
        const item = this.state.pets.sort(() => Math.random() - Math.random())
                                       .find(() => true);
        return(         
            <div className="image_container">
            {
                    item &&
                <div >        
                <h1 style={{textAlign: "center"}}>{item.title}</h1>
                <div className="imgbox">
                    <img className="center-fit" src='https://i.imgur.com/sFq0wAC.jpeg'></img>
                </div>    
                <p style={{textAlign:"center"}}>Caption: {item.caption}</p>
                <p style={{textAlign:"center"}}>Contributor: {item.contributor}</p>
                </div >
            }
                   
            </div>
        )
    }
}

export default WelcomeComponent;  

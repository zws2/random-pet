import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PetDataService from '../../service/PetDataService';

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pets: []
        }
        this.refreshPetRegistry.refreshPetRegistry.bind(this)
    }

    refreshPetRegistry() {
        var image
        PetDataService.retrieveAllPets()
        .then(
            response => {
                image = response.data
            }
        )
        console.log(image)
    }

    render() {

        return(
            <div className="image_container">
                <h1 style={{textAlign: "center"}}>Cash Money</h1>
                <div class="imgbox">
{/*                     <img class="center-fit" src='https://i.imgur.com/sFq0wAC.jpeg'/> */}
{/*                     <img class="img-circle img-responsive center-fit" src={"data:image/png;base64," + image} /> */}
{/*                     https://i.imgur.com/QBSDdJJ.jpeg */}
                </div>
                <p style={{textAlign:"center"}}>this birb is wearing a money hat</p>
            </div>
        )
    }
}
export default WelcomeComponent;  

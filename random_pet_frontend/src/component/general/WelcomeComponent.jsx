import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: this.props.name
        }
    }
    render() {
        return(
            <div className="image_container">
                <h1 style={{textAlign: "center"}}>Cash Money</h1>
                <div class="imgbox">
                    <img class="center-fit" src='https://i.imgur.com/sFq0wAC.jpeg'></img>
{/*                     https://i.imgur.com/QBSDdJJ.jpeg */}
                </div>
                <p style={{textAlign:"center"}}>this birb is wearing a money hat</p>
            </div>
        )
    }
}
export default WelcomeComponent;  

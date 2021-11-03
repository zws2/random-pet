import React, { Component } from 'react'

class FooterComponent extends Component {
    render() {

        const isRegistry = window.location.href.includes("petRegistry")
        console.log(isRegistry)
        if(isRegistry){
            return(
                <footer className="registryFooter">
                     <span className="text-muted">Random Pets!</span>
                 </footer>
             )
        }else{
            return(
                <footer className="footer">
                    <span className="text-muted">Random Pets!</span>
                </footer>
            )
        }
    }
}


export default FooterComponent; 
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <h3><Link className="nav-link" to="/">Home</Link></h3>
                        <h3><Link className="nav-link" to="/petRegistry">Random Pets!</Link></h3>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default HeaderComponent; 
import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.itemSelected = this.itemSelected.bind(this);
    }
    itemSelected() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                <Link alt="Home" to="/"><img src={logo} alt="logo" className="gl-logo" /></Link>

                <ul className="navbar-nav flex-row ml-md-auto d-md-flex">
                    <li className="nav-item">
                        <Link alt="Home" to="/" onClick={this.itemSelected}><i className="home icon nav-icon" alt="Home"></i><span className="nav-text">
                           Home</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link alt="About" to="/about" onClick={this.itemSelected}><i className="info icon nav-icon"></i><span className="nav-text">About</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link alt="Contact" to="/contact" onClick={this.itemSelected}><i className="user icon nav-icon"></i><span className="nav-text">Contact</span></Link>
                    </li>
                    <li onClick={this.props.onSelectMenu} className="nav-item hamburger"><i className="sidebar icon nav-icon"></i></li>
                </ul>
            </header>
        );
    }
}

export default Header;
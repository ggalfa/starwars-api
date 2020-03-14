import React, { Component } from 'react';
import '../css/header.css';
import Logo from '../images/star_wars.png';

export default class Header extends Component {
    render() {
        return (
            <div className="navegation">
                <header className="test">
                    <ul className="menu">
                        <li><img className="logo" src={Logo} alt="Logo" /></li>
                        <li className="item">Home</li>
                    </ul>
                </header>
            </div>
        );
    }
}
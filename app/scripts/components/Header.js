import React, {Component} from 'react'
export default class Header extends Component{
    render() {
        return (
            <header id="header">
                <div id="logo-group">
                    <span id="logo"> <img src="img/logo.png" alt="SmartAdmin" /> </span>
                </div>
            </header>
        );
    }
}
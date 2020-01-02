import React, {Component} from "react";


import HeaderR from "../HeaderNav/HeaderNav"
import "./LogOut.scss"
import { NavLink } from 'react-router-dom';

class LogOut extends Component {
    render() {
        return <>

            <div className="sign-container">
                <h1 className="sign-title">Wylogowanie nastąpiło pomyślnie!</h1>
                <img src={require('../assets/Decoration.svg')} alt="" className="sign-decor"/>
            </div>
            <div className="sign-buttons-container">
                <button className="sign-button"><NavLink to="/" className="sign-button-sign">Strona główna</NavLink></button>
            </div>

            <HeaderR />
        </>
    }
}

export default LogOut;
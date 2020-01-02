import React, {Component} from "react";
// import Header from "../Header/header";

import HeaderR from "../HeaderNav/HeaderNav"
import "./HeaderLogin.scss"
import { NavLink } from 'react-router-dom';


class Home extends Component {
    state = {
        email: "",
        pass: "",
        isFormClicked:false,
        isPassValid: true,
        isEmailValid: true,
    };


    onClickSubmit = e => {
        e.preventDefault();
        const isFormValid = this.isFormValid();
        if (isFormValid === true) {
            this.setState({isFormClicked:true});
        }
    };

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    isFormValid = () => {
        const { pass, email } = this.state;
        const isPassValid = pass.length >= 6;
        const isEmailValid = email.includes("@") && email.length >= 3;
        this.setState({isPassValid, isEmailValid});
        return isPassValid && isEmailValid
    };

    render() {
        const {pass, email } = this.state;
        return <>

            <div className="log-container">
                <h1 className="log-title">Zaloguj się</h1>
                <img src={require('../assets/Decoration.svg')} alt="" className="log-decor"/>
            </div>

            <form onSubmit={this.onClickSubmit} >

            <div className="log-inputs-container">
                <label htmlFor="" className="log-label">E-mail</label>
                <input
                    type="text"
                    className="log-input"
                    name="email"
                    onChange={this.onInputChange}
                    value={email}
                />
                <p className="error">{!this.state.isEmailValid && <span>E-mail jest  nieprawidłowy</span>}</p>
                <label htmlFor="" className="log-label" >Hasło</label>
                <input
                    type="password"
                    className="log-input"
                    name="pass"
                    onChange={this.onInputChange}
                    value={pass}
                />
                <p className="error">{!this.state.isEmailValid && <span>Hasło jest za krótkie</span>}</p>
            </div>
            <div className="log-buttons-container">
                <button className="log-button"><NavLink to="/signup" className="log-button-sign">Załóż konto</NavLink></button>
                <button className="log-button">Zaloguj się</button>
            </div>
            </form>

            <HeaderR />
        </>
    }
}

export default Home;


import React, {Component} from "react";


import HeaderR from "../HeaderNav/HeaderNav"
import "./HeaderSignUp.scss"
import { NavLink } from 'react-router-dom';


class Sign extends Component {
    state = {
        email: "",
        pass: "",
        passR: "",
        isFormClicked:false,
        isPassValid: true,
        isPassRValid: true,
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
        const { pass, email, passR } = this.state;
        const isPassValid = pass.length >= 6;
        const isEmailValid = email.includes("@") && email.length >= 3;
        const isPassRValid = pass === passR;
        this.setState({isPassValid, isEmailValid, isPassRValid});
        return isPassValid && isEmailValid && isPassRValid
    };

    render() {
        const {pass, email, passR } = this.state;
        return <>

            <div className="sign-container">
                <h1 className="sign-title">Załóż konto</h1>
                <img src={require('../assets/Decoration.svg')} alt="" className="sign-decor"/>
            </div>

            <form onSubmit={this.onClickSubmit} >

                <div className="sign-inputs-container">
                    <label htmlFor="" className="sign-label">E-mail</label>
                    <input
                        type="text"
                        className="sign-input"
                        name="email"
                        onChange={this.onInputChange}
                        value={email}
                    />
                    <p className="error">{!this.state.isEmailValid && <span>E-mail jest  nieprawidłowy</span>}</p>
                    <label htmlFor="" className="sign-label" >Hasło</label>
                    <input
                        type="password"
                        className="sign-input"
                        name="pass"
                        onChange={this.onInputChange}
                        value={pass}
                    />
                    <p className="error">{!this.state.isPassValid && <span>Hasło jest za krótkie</span>}</p>
                    <label htmlFor="" className="sign-label" >Powtórz hasło</label>
                    <input
                        type="password"
                        className="sign-input"
                        name="passR"
                        onChange={this.onInputChange}
                        value={passR}
                    />
                    <p className="error">{!this.state.isPassRValid && <span>Hasła nie są takie same</span>}</p>
                </div>
                <div className="sign-buttons-container">
                    <button className="sign-button"><NavLink to="/login" className="sign-button-sign">Zaloguj się</NavLink></button>
                    <button className="sign-button">Załóż konto</button>
                </div>
            </form>

            <HeaderR />
        </>
    }
}

export default Sign;




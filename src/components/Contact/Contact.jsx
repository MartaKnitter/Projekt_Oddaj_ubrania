import React, {Component} from "react";

import "./Contact.scss"

import imgSrc from  '../assets/Decoration.svg'

class Contact extends Component {
    state = {
        email: "",
        theName: "",
        textarea: "",
        isFormClicked:false,
        isNameValid: true,
        isEmailValid: true,
        isTextareaValid: true,
        response: ""
    };


    onClickSubmit = e => {
        e.preventDefault();
        if (!this.isFormValid()) {
            return false;
        }
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.theName,
                email: this.state.email,
                message: this.state.textarea
            })
        })
            .then(response => response.json())
            .then(resp => {
                if (resp.status === 'error') {
                    return false;
                }
                this.setState({ isFormClicked: true });
            });
    };

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onNameInputChange = e => {
        this.setState({
            theName: e.target.value
        })
    };

    isFormValid = () => {
        const { theName, email, textarea } = this.state;
        const isNameValid = theName.length >= 2 && !theName.includes(" ");
        const isEmailValid = email.includes("@") && email.length >= 3;
        const isTextareaValid = textarea.length >= 120;
        this.setState({isNameValid, isTextareaValid, isEmailValid});
        return isNameValid && isTextareaValid && isEmailValid
    };


    render() {
        const {theName, email, textarea } = this.state;
        return (
            <div className="contact-container" id="contacts">
                <div className="contact-start">
                    <h1 className="contacts-title">Skontaktuj się z Nami</h1>
                    <img src={imgSrc} alt="" className="contact-decor"/>
                </div>
            <div>
                <form onSubmit={this.onClickSubmit} className="all-inputs" >
                    <div className="form-name-email-inputs">
                        <input
                            type="text"
                            name="name"
                            placeholder="Podaj imie"
                            onChange={this.onNameInputChange}
                            value={theName}
                            className="contact-input" />
                        <p className="error">{!this.state.isNameValid && <span>Pole imię musi zawierać co najmniej 2 znaki i być jednym wyrazem</span>}</p>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={this.onInputChange}
                            value={email}
                            className="contact-input" />
                        <p className="error">{!this.state.isEmailValid && <span>E-mail musi zawierac znak "@" </span>}</p>
                    </div>
                    <textarea
                        className="contact-input-mess"
                        name="textarea"
                        value={textarea}
                        placeholder="Wiadomosć"
                        onChange={this.onInputChange} />
                    <p className="error">{!this.state.isTextareaValid && <span>Pole wiadomość musi mieć conajmniej 120 znaków</span>}</p>

                    <button
                        type="submit"
                        className="button-contact">Wyślij</button>
                </form>
            </div>
                {this.state.isFormClicked &&
                <div>
                    <h1>Dziękujemy za wiadomość</h1>
                </div>}
            </div>
        );
    }
}


export default Contact;

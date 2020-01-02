import React, {Component} from "react";

import {NavLink} from "react-router-dom";
import "././Alert.scss"


class Alert extends Component {
    render() {
        return (
            <>
                <div className="alert-background">
                    <h1 className="alert-title"><span>Ważne!</span></h1>
                    <p className="alert-text">Wszystkie rzeczy do oddania zapakuj w worki 60l. Dokładną instukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                </div>
            </>
        )
    }
}


export default Alert;

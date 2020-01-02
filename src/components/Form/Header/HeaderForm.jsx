import React, {Component} from "react";

import {NavLink} from "react-router-dom";
import "././HeaderForm.scss"


class Header extends Component {
    render() {
        return (
            <>
                <div className="header-form-background" >
                    <h1 className="header-title">Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                    <div className="header-decor"></div>
                    <h2 className="header-form-subtitle">Wystarczą 4 proste kroki:</h2>
                    <div className="form-steps">
                        <div className="form-one-step">
                            <p className="form-number">1</p>
                            <p>Wybierz rzeczy</p>
                        </div>
                        <div className="form-one-step">
                            <p className="form-number">2</p>
                            <p>Spakuj je w worki</p>
                        </div>
                        <div className="form-one-step">
                            <p className="form-number">3</p>
                            <p>Wybierz fundację</p>
                        </div>
                        <div className="form-one-step">
                            <p className="form-number">4</p>
                            <p>Zamów kuriera</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Header;

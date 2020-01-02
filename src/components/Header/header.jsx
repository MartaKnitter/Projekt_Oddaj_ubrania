import React, {Component} from "react";

import "./header.scss"
import {NavLink} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <>
                <div className="header-background" >
                    <h1 className="header-title">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce!</h1>
                    <div className="header-decor"></div>
                    <button className="header-button-give"><NavLink to="/oddaj-rzeczy" className="header-button">Oddaj rzeczy</NavLink></button>
                    <button className="header-button-organize">Zorganizuj zbiórkę</button>
                </div>
            </>
        )
    }
}


export default Header;

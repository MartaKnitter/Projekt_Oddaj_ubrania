import React, {Component} from "react";

import "./ThreeColumns.scss"


class ThreeColumns extends Component {
    render() {
        return (
            <>
                <div className="columns-background" >
                    <div className="all-columns">
                        <div className="one-column">
                            <h1 className="columns-title">10</h1>
                            <h3 className="columns-subtitle">Oddanych worków</h3>
                            <h5 className="columns-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h5>
                        </div>
                        <div className="one-column">
                            <h1 className="columns-title">5</h1>
                            <h3 className="columns-subtitle">Oddanych worków</h3>
                            <h5 className="columns-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h5>
                        </div>
                        <div className="one-column">
                            <h1 className="columns-title">7</h1>
                            <h3 className="columns-subtitle">Oddanych worków</h3>
                            <h5 className="columns-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h5>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default ThreeColumns;

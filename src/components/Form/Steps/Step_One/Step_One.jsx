import React, {Component} from "react";

import {NavLink} from "react-router-dom";
import "././Step_One.scss"


class StepOne extends Component {
    state = {

    }
    render() {
        return (
            <>
                <div className="step-one-background">
                    <p className="step-one-text">Krok 1/4</p>
                    <h1 className="step-one-title">Podaj liczbę 60l worków, w które spakowałeś/aś swoje rzeczy:</h1>

                    <div className="step-one-select-container">
                        <p className="step-one-text">Liczba 60l worków:</p>
                        <select name="bags" className="step-one-select">
                            <option className="step-one-option">--Wybierz--</option>
                            <option value="volvo">1</option>
                            <option value="saab">2</option>
                            <option value="fiat">3</option>
                            <option value="audi">4</option>
                        </select>
                    </div>

                    <div>
                        <button className="step-one-button">Wstecz</button>
                        <button className="step-one-button">Dalej</button>
                    </div>
                </div>
            </>
        )
    }
}


export default StepOne;

import React, {Component} from "react";
import fund from './database/Fundactions'
import "./Fundactions.scss"

class Fundactions extends Component {
    state = {
        fundactions: fund.fundactions,
        total: null,
        per_page: 3,
        current_page: 1
    };

    get list() {
        const {fundactions, per_page, current_page} = this.state;
        const start = current_page * per_page;
        return fundactions.slice(start, start + per_page)
    }

    get totalCount() {
        return Math.ceil(this.state.fundactions.length / this.state.per_page);
    }

    get paginateItem() {
        let result = [];
        for (let i =0; i < this.totalCount; i++) {
            result.push(<li className="paginate-item" onClick={this.handleClickPaginate} key={i} id={i}>{i + 1}</li>)
        }
        return result;
    }

    onButtonFundClick = (name) => () => {
        this.setState({
            fundactions: fund[name],
            current_page: 0
        });
    };

    handleClickPaginate = (e) => {
        this.setState({
            current_page: e.target.id
        })
    };


    render() {
        console.log(this.list, "dupa");
        return (
            <>
                <div className="fundactions-title-container" id="foundation">
                    <h1 className="fundactions-title">Komu pomagamy?</h1>
                    <img src={require('../assets/Decoration.svg')} alt="" className="fundactions-decor"/>
                </div>
                <div className="fundactions-button-container">
                    <button id="fund-button" className="fundactions-button" onClick={this.onButtonFundClick('fundactions')}>Fundacjom</button>
                    <button className="fundactions-button" onClick={this.onButtonFundClick('organizations')}>Organizacjom pozarządowym</button>
                    <button className="fundactions-button" onClick={this.onButtonFundClick('local')}>Lokalnym zbiórkom</button>
                </div>
                <p className="fundactions-paragraph">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>


                {this.list.map(fundactions => (
                    <div className="position-container" key={fundactions.id}>
                        <div>
                            <h3 className="position-title">{fundactions.name}</h3>
                            <p className="position-description">{fundactions.description}</p>
                        </div>
                        <div>
                            <p>{fundactions.kind}</p>
                        </div>
                    </div>
                ))}
                <ul className="paginate">
                    {this.paginateItem}
                </ul>
            </>
        )
    }
}

export default Fundactions;

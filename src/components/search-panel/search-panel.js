import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    getTerm = (e) => { // получаем значение input по которому будем фильтровать data и отправляем в app js
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render () {
        return (
            <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={this.state.term}
            onChange={this.getTerm}/>
        );
    }
}

export default SearchPanel;
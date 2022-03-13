import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component { // дрбавляем вёрстку
    constructor (props) {
        super(props);
        this.state = {
            filter: "",
            increase: false,
            salary: false
        }
    }

    onUpdateIncrease = () => {
        this.setState({
            increase: !this.state.increase
        });
        if (this.state.increase) {
            this.setState({
                filter: "rise"
            })
        } else {
            this.setState({
                filter: " "
            })
        }

        this.props.onUpdateFilter(this.state.filter);
    }

    onUpdateSalary = () => {
        this.setState({
            salary: !this.state.salary
        });
        if (this.state.salary) {
            this.setState({
                filter: "salary"
            })
        } else {
            this.setState({
                filter: " "
            })
        }

        this.props.onUpdateFilter(this.state.filter);
    }

    render () {
        return (
            <div className="btn-group">
                <button 
                    className="btn btn-light"
                    type="button">
                        Все сотрудники
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    onClick={this.onUpdateIncrease}
                    name="increase"
                    value={this.state.increase}>
                        На повышение
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    onClick={this.onUpdateSalary}
                    name="salary"
                    value={this.state.salary}>
                        З/П больше 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;
import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component { // вёрстка
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => { // функция для добавления данных в state
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => { // функция для передачи данных в функция из App.js
        e.preventDefault();
        if (this.state.name !== "" && this.state.salary !== "") {
            this.props.onAdd(this.state.name, this.state.salary);
        }
        this.setState({ // после отправки данных в App.js очищаем форму
             name: "",
             salary: ""
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
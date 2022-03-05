import { Component } from "react";

import "./app.css"
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form.js";

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [ // имитация данных с сервера
                {name: "Alex", salary: 3000, increase: true, id: 1},
                {name: "John", salary: 5000, increase: false, id: 2},
                {name: "Carl W.", salary: 8000, increase: true, id: 3},
            ]
        };
        this.maxId = 3;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id) // возвращаем все элементы массива, id которых не равен id удаляемого элемента
            }
        });
    }

    addItem = (name, salary) => { // функция для добавления нового объекта в массив
        const newItem = { // создаём новый объект с помощью пришедших данных
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => { // пересоздаём data и добавляем в state
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render () {
        return ( // добавляем все компоненты на страницу
        <div className = "app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList 
            data={this.state.data}
            onDelete={this.deleteItem}/> {/*Через пропс передаём метод*/}
            <EmployeesAddForm
            onAdd={this.addItem}/>
        </div>
        );
    }
}

export default App;
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
                {name: "Alex I.", salary: 3000, increase: false, rise: true, id: 1},
                {name: "John A.", salary: 5000, increase: false, rise: false, id: 2},
                {name: "Carl W.", salary: 8000, increase: false, rise: false, id: 3},
            ],
            term: "",
            filter: "rise"
        };
        this.maxId = 3;
        this.counter = 0;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id) // возвращаем все элементы массива, id которых не равен id удаляемого элемента
            }
        });
    }

    addItem = (name, salary) => { // функция для добавления нового объекта в массиве
        const newItem = { // создаём новый объект с помощью пришедших данных
            name, 
            salary,
            increase: false,
            rise: false,
            id: ++this.maxId
        }

        this.setState(({data}) => { // пересоздаём data и добавляем в state
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => { // map создаёт новый массив
                if (item.id === id) { // если мы находим элемент у которого id совпадает с пришедши id
                    return {...item, [prop]: !item[prop]}; // вохвращаем новый объект, со всеми свойствами старого и изменённым prop
                }
                return item; // если условие не сработало, то возвращаем элемент в новый массив
            })
        }))
    }

    searchEmp = (items, term) => { // метод для поиска; первый аргумерт - массив данных, второй - строка по которой происходит фильтрация
        if (term.length === 0) {
            return items;
        };

        if (term !== "") { // если строка для поиска не равна пустой строке, то фильтруем элементы
            return items.filter(item => {
                return item.name.indexOf(term) > -1; // ищет совпадения в строке 
            });
        }
    }

    onUpdateSearch = (term) => { // получаем строку, по которой будем фильтровать data из search-panel js
        this.setState({term});
    }

    filterPost= (items, filter) => {
        switch (filter) {
            case "salary": // если состояние фильтра равно ..., то выполняем ...
                return items.filter(item => item.salary > 1000);
            case "rise": 
                return items.filter(item => item.rise);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    getSalaryValue = (newSalary, oldSalary) => { // получаем значение динамически введённой з\п
        this.setState(({data}) => ({
            data: data.map(item => {
                if (oldSalary === item.salary) {
                    return {...item, salary: [newSalary]}
                }
                return item;
            })
        }))
    }

    render () {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter); // отфильтрованный массив 

        return ( // добавляем все компоненты на страницу
        <div className = "app">
            <AppInfo 
            employees={employees}
            increased={increased}/>

            <div className="search-panel">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter 
                filter={filter}
                onFilterSelect={this.onFilterSelect}/>
            </div>

            <EmployeesList 
            data={visibleData}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}
            getSalaryValue={this.getSalaryValue}/> {/*Через пропс передаём метод*/}
            <EmployeesAddForm
            onAdd={this.addItem}/>
        </div>
        );
    }
}

export default App;
import "./employees-list-item.css";
import { Component } from "react";

class EmployeesListItem extends Component { // добавляем класс данные с сервера
    constructor (props) {
        super(props);
        this.state = {
            increase: false, // свойство отвечающее за повышение сотрудника
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({ // деструктуризировали объект state прямо в аргументе
            increase: !increase // устанавливаем новое свойство increase, которое будет противоположно предыдущему
        }));
    }

    addLike = () => {
        this.setState(({like}) => ({
            like: !like
        }));
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, like} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";

        if (increase) {
            classNames += " increase";
        };

        if (like) {
            classNames += " like";
        };

    return (
        <li className={classNames}>
            <span onClick={this.addLike} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm " 
                    onClick={this.onIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}> {/*При клике выполняется функция, переданная в пропсе*/}
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
    }
}

export default EmployeesListItem;
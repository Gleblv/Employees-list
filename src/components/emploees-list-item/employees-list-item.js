import "./employees-list-item.css";

function EmployeesListItem ({name, salary, onDelete, onToggleProp, increase, rise, getSalaryValue}) { // добавляем класс данные с сервера

    let classNames = "list-group-item d-flex justify-content-between";

    if (increase) {
        classNames += " increase";
    };

    if (rise) {
        classNames += " like";
    };

    return (
        <li className={classNames}>
            <span onClick={onToggleProp} className="list-group-item-label" data-toggle="rise">{name}</span> {/*С помощью data-атрибутов, передаём в обработчик события свойство которое нужно изменить*/}
            <input  onChange={(e) => getSalaryValue(e.target.value, salary)} type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm " 
                    onClick={onToggleProp} 
                    data-toggle="increase"> {/*назначаем data-атрибут*/}
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

export default EmployeesListItem;
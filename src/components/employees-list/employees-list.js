import EmployeesListItem from "../emploees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({data, onDelete, onToggleProp, getSalaryValue}) => { 

    const elem = data.map(item => {
        const {id, ...itemProps} = item; // с помощью деструктуризации вытаскиваем id, а потом всё остальное объединям в одно свойство itemProps
        return( 
            // добавляем пропсы каждому компоненту
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)} // помещаем в пропс функцию, переданную через пропс из App js
            getSalaryValue={getSalaryValue}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}/> // получаем data-атрибут элемента значение которого increase либо rise
        );
    });

    return ( // помещаем созданные компоненты на сайт
        <ul className="app-list list-group"> 
            {elem}
        </ul>
    );
}

export default EmployeesList;
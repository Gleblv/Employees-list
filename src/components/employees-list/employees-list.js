import EmployeesListItem from "../emploees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({data, onDelete}) => { 

    const elem = data.map(item => {
        const {id, ...itemProps} = item; // с помощью деструктуризации вытаскиваем id, а потом всё остальное объединям в одно свойство itemProps
        return( 
            // добавляем пропсы каждому компоненту
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}/> // помещаем в пропс функцию, переданную через пропс из App js
        );
    });

    return ( // помещаем созданные компоненты на сайт
        <ul className="app-list list-group"> 
            {elem}
        </ul>
    );
}

export default EmployeesList;
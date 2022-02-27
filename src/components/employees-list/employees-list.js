import "./employees-list";
import EmployeesListItem from "../emploees-list-item/employees-list-item";

const EmployeesList = ({data}) => { 

    const elem = data.map(item => {
        const {id, ...itemProps} = item; // с помощью деструктуризации вытаскиваем id, а потом всё остальное объединям в одно свойство itemProps
        return(
            <EmployeesListItem key={id} {...itemProps}/> // добавляем пропсы каждому компоненту
        );
    });

    return ( // помещаем созданные компоненты на сайт
        <ul className="app-list list-group"> 
            {elem}
        </ul>
    );
}

export default EmployeesList;
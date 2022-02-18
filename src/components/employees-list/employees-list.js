import "./employees-list";
import EmployeesListItem from "../emploees-list-item/employees-list-item";

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    );
}

export default EmployeesList;
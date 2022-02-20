import "./app.css"
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form.js";

function App () {

    const data = [
        {name: "Alex", salary: 3000, increase: true},
        {name: "John", salary: 5000, increase: false},
        {name: "Carl W.", salary: 8000, increase: true},
    ];

    return (
        <div className = "app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;
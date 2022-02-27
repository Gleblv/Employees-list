import "./search-panel.css";

const SearchPanel = () => {
    return ( // вёрстка
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"/>
    );
}

export default SearchPanel;
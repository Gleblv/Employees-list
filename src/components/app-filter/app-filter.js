import "./app-filter.css";

function AppFilter ({filter, onFilterSelect}) { // дрбавляем вёрстку

    // динамическое формирование кнопок

    const buttonsData = [
        {name: "all", label: "Все сотрудники"},
        {name: "rise", label: "На повышение"},
        {name: "salary", label: "З/П больше 1000$"}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name; // если пропс filter равен name, то возвращаем true
        const clazz = active ? "btn-light" : "btn-outline-light"; // определяем активна ли кнопка и в зависимости от этого выбираем отдельный класс
        return (
            <button 
            className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => onFilterSelect(name)}> {/* Назначаем на обработчик событий функцию которая приходит из пропсов */}
                {label}
             </button>
        )
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;
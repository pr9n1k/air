import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <h3>Сортировка</h3>
      <ul className="sort__list">
        <li className="sort__item">
          <label>
            <input type="radio" name="sort" />- по возрастанию цены
          </label>
        </li>
        <li className="sort__item">
          <label>
            <input type="radio" name="sort" />- по убыванию цены
          </label>
        </li>
        <li className="sort__item">
          <label>
            <input type="radio" name="sort" />- по времени в пути
          </label>
        </li>
      </ul>
      <h3>Фильтровать</h3>
      <ul>
        <li>
          <label>
            <input type="checkbox" />- 1 пересадка
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />- без пересадок
          </label>
        </li>
      </ul>
      <h3>Цена</h3>
      <div>
        <div>
          От <input type="number" />
        </div>
        <div>
          До <input type="number" />
        </div>
      </div>
      <h3>Авиакомпании</h3>
      <ul className="airlines__filter-list">
        <li className="airlines__filter-item">
          <label className="airlines__filter-label">
            <input type="checkbox" />-{" "}
            <span className="airlines__filter-title">LOT Polish Airlines</span>
            <span>от 21049 р.</span>
          </label>
        </li>
        <li>
          <label className="airlines__filter-label">
            <input type="checkbox" />-{" "}
            <span className="airlines__filter-title">
              Аэрофлот - российские перевозки
            </span>
            <span>от 21049 р.</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;

import React from "react";
import { Filter as IFilter, valueSort } from "../types/Filter";

type FilterProps = {
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
  filter: IFilter;
};

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newTransfer: number[] = [];
    if (event.target.checked) {
      newTransfer = [...filter.transfer, parseInt(event.target.value)];
    } else {
      newTransfer = filter.transfer.filter(
        (item) => item !== parseInt(event.target.value)
      );
    }

    setFilter({ ...filter, transfer: newTransfer });
  };

  const onChangeMaxMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, maxPrice: parseInt(event.target.value) });
  };
  const onChangeMinMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, minPrice: parseInt(event.target.value) });
  };

  return (
    <div className="filter">
      <h3>Сортировка</h3>
      <ul className="sort__list">
        <li className="sort__item">
          <label>
            <input
              type="radio"
              name="sort"
              value={valueSort.MinMax}
              onChange={(e) =>
                setFilter({
                  ...filter,
                  sort: valueSort.MinMax,
                })
              }
            />
            - по возрастанию цены
          </label>
        </li>
        <li className="sort__item">
          <label>
            <input
              type="radio"
              name="sort"
              value={valueSort.MaxMin}
              onChange={(e) =>
                setFilter({
                  ...filter,
                  sort: valueSort.MaxMin,
                })
              }
            />
            - по убыванию цены
          </label>
        </li>
        {/* <li className="sort__item">
          <label>
            <input
              type="radio"
              name="sort"
              value={valueSort.Time}
              onChange={(e) =>
                setFilter({
                  ...filter,
                  sort: valueSort.Time,
                })
              }
            />
            - по времени в пути
          </label>
        </li> */}
      </ul>
      <h3>Фильтровать</h3>
      <ul>
        <li>
          <label>
            <input type="checkbox" value={1} onChange={onChangeCheckbox} />- 1
            пересадка
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value={0} onChange={onChangeCheckbox} />- без
            пересадок
          </label>
        </li>
      </ul>
      <h3>Цена</h3>
      <div>
        <div>
          От{" "}
          <input
            type="number"
            value={filter.minPrice}
            onChange={onChangeMinMax}
          />
        </div>
        <div>
          До{" "}
          <input
            type="number"
            value={filter.maxPrice}
            onChange={onChangeMaxMin}
          />
        </div>
      </div>
      {/* <h3>Авиакомпании</h3>
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
      </ul> */}
    </div>
  );
};

export default Filter;

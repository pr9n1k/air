import React from "react";
import FlightService from "../api/flight";
import Filter from "../components/Filter";
import Layout from "../components/Layout";
import ScrollButton from "../components/ScrollButton";
import useFilterFlights from "../hooks/useFilterFlights";
import { Filter as IFilter, valueSort } from "../types/Filter";
import { Flight } from "../types/Flight";
import FlightList from "./../components/FlightList";

const step = 10;

const Air = () => {
  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const [flights, setFlights] = React.useState<Flight[]>([]);

  const [count, setCount] = React.useState(step);
  const [filter, setFilter] = React.useState<IFilter>({
    maxCount: count,
    minPrice: 0,
    maxPrice: 0,
    transfer: [],
    sort: valueSort.Default,
  });

  const filterFlights = useFilterFlights(flights, filter);

  const showMore = () => {
    if (flights.length > count) {
      setCount(count + step);
      setFilter({ ...filter, maxCount: count + step });
    }
  };

  // React.useEffect(() => {
  //   if (
  //     flights.length &&
  //     filterFlights.length < step &&
  //     flights.length > count
  //   ) {
  //     setCount(count + step - filterFlights.length);
  //     setFilter({ ...filter, maxCount: count + step - filterFlights.length });
  //   }
  // }, [filterFlights.length, filter]);

  React.useEffect(() => {
    FlightService.getFlights().then((response) => {
      setFlights(response.data.result.flights);
    });
  }, []);
  return (
    <Layout>
      <div className="air">
        <Filter filter={filter} setFilter={setFilter} />
        <div className="air__content">
          {!flights.length ? (
            <h2>Список не найден</h2>
          ) : !filterFlights.length ? (
            <>
              <h2 className="title">Ничего не найдено</h2>
              <p>Измените данные фильтров</p>
              <h3 className="show-more" onClick={showMore}>
                Показать еще
              </h3>
            </>
          ) : (
            <>
              <FlightList flights={filterFlights} />
              {flights.length > count && (
                <button className="btn btn-secondary" onClick={showMore}>
                  Показать еще
                </button>
              )}
            </>
          )}
        </div>
      </div>
      <ScrollButton />
    </Layout>
  );
};

export default Air;

import { useMemo } from "react";
import { Filter, valueSort } from "../types/Filter";
import { Flight } from "../types/Flight";

const useFilterFlights = (flights: Flight[], filter: Filter) => {
  const filterFlight = useMemo(() => {
    const filterForMaxCount = flights.slice(0, filter.maxCount);

    const filterForTransfer = filterForMaxCount.filter((flight) => {
      if (!filter.transfer.length) return flight;
      const legs = flight.flight.legs;
      let success = true;
      legs.forEach((leg) => {
        const transfer = leg.segments.length - 1;
        let isTransfer = false;
        filter.transfer.forEach((item) => {
          if (item === transfer) {
            isTransfer = true;
          }
        });
        if (!isTransfer) {
          success = false;
        }
      });
      return success ? flight : false;
      // return flight.flight.legs.some((leg) =>
      //   filter.transfer.includes(leg.segments.length - 1)
      // )
      //   ? flight
      //   : false;
    });
    const filterForPrice = filterForTransfer.filter((item) => {
      if (filter.maxPrice === 0 && filter.minPrice === 0) return item;
      if (
        parseInt(item.flight.price.total.amount) >= filter.minPrice &&
        parseInt(item.flight.price.total.amount) <= filter.maxPrice
      ) {
        return item;
      }
    });
    const sort = filterForPrice.sort((a, b) => {
      if (filter.sort === valueSort.MinMax) {
        return (
          parseInt(a.flight.price.total.amount) -
          parseInt(b.flight.price.total.amount)
        );
      } else if (filter.sort === valueSort.MaxMin) {
        return (
          parseInt(b.flight.price.total.amount) -
          parseInt(a.flight.price.total.amount)
        );
      } else if (filter.sort === valueSort.Time) {
        return 0;
      } else if (filter.sort === valueSort.Default) {
        return 0;
      }
      return 0;
    });
    return sort;
  }, [
    filter.maxCount,
    filter.maxPrice,
    filter.minPrice,
    filter.sort,
    filter.transfer,
    flights,
  ]);
  return filterFlight;
};

export default useFilterFlights;

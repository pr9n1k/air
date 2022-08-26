import React from "react";
import PlaneDown from "../assets/PlaneDown";
import PlaneUp from "../assets/PlaneUp";
import { Flight } from "../types/Flight";
import { differenceDate } from "../utils/differenceDate";
import {
  formatDifferenceDate,
  formatMinutes,
  formatMonth,
  formatWeekDay,
} from "./../utils/formateDate";
import { transfer } from "./../utils/transfer";

type FlightProps = {
  flight: Flight;
};

const FlightItem: React.FC<FlightProps> = ({ flight }) => {
  //Обработка даты и времени
  // В ту сторону вылет
  const dateFromFrom: Date = new Date(
    flight.flight.legs[0].segments[0].departureDate
  );

  // В ту сторону прилет
  const dateFromTo: Date = new Date(
    flight.flight.legs[0].segments[
      flight.flight.legs[0].segments.length - 1
    ].arrivalDate
  );

  //От туда вылет
  const dateToFrom = new Date(flight.flight.legs[1].segments[0].departureDate);
  //от туда прилет
  const dateToTo = new Date(
    flight.flight.legs[1].segments[
      flight.flight.legs[1].segments.length - 1
    ].arrivalDate
  );

  //обработка сегментов
  //в ту сторону вылет
  const segmentFromFrom = flight.flight.legs[0].segments[0];
  //в ту сторону прилет
  const segmentFromTo =
    flight.flight.legs[0].segments[flight.flight.legs[0].segments.length - 1];
  //От туда вылет
  const segmentToFrom = flight.flight.legs[1].segments[0];
  //От туда прилет
  const segmentToTo =
    flight.flight.legs[1].segments[flight.flight.legs[1].segments.length - 1];

  //время перелета туда
  const differensTo = formatDifferenceDate(dateFromTo, dateFromFrom);
  //время перелета оттуда
  const differensFrom = formatDifferenceDate(dateToTo, dateToFrom);

  return (
    <div className="flight__item ticket">
      <div className="ticket__leftsite">
        <p className="ticket__price">
          {flight.flight.price.total.amount}{" "}
          {flight.flight.price.total.currency}
        </p>
        <button className="btn btn-primary">Выбрать билет</button>
      </div>
      <div className="ticket__rightsite">
        <div className="ticket__iarline">{flight.flight.carrier.caption}</div>
        <div className="ticket__info">
          <div className="ticket__from">
            <p className="ticket__time">
              {dateFromFrom.getHours()}:
              {formatMinutes(dateFromFrom.getMinutes())}
            </p>
            <p className="ticket__city">
              {segmentFromFrom.departureCity.caption}
            </p>
            <p className="ticket__date">
              {dateFromFrom.getDate()}{" "}
              {formatMonth(dateFromFrom.getMonth() + 1)},{" "}
              {formatWeekDay(dateFromFrom.getDay())}
            </p>
          </div>
          <div className="ticket__way">
            <div className="ticket__way-time">
              <PlaneUp />
              <span>В пути: {differensTo}</span>
              <PlaneDown />
            </div>
            <div className="hr"></div>
            <div className="ticket__way-uid">
              <span className="ticket__uid">
                {segmentFromFrom.departureAirport.uid}
              </span>
              <span>{transfer(flight.flight.legs[0].segments)}</span>
              <span className="ticket__uid">
                {segmentFromTo.arrivalAirport.uid}
              </span>
            </div>
          </div>
          <div className="ticket__to">
            <p className="ticket__time">
              {dateFromTo.getHours()}:{formatMinutes(dateFromTo.getMinutes())}
            </p>
            <p className="ticket__city">{segmentFromTo.arrivalCity?.caption}</p>
            <p className="ticket__date">
              {dateFromTo.getDate()} {formatMonth(dateFromTo.getMonth() + 1)},{" "}
              {formatWeekDay(dateFromTo.getDay())}
            </p>
          </div>
          {/* </div> */}
          <hr />
          {/* <div className="ticket__info"> */}
          <div className="ticket__from">
            <p className="ticket__time">
              {dateToFrom.getHours()}:{formatMinutes(dateToFrom.getMinutes())}
            </p>
            <p className="ticket__city">
              {segmentToFrom.departureCity?.caption}
            </p>
            <p className="ticket__date">
              {dateToFrom.getDate()} {formatMonth(dateToFrom.getMonth() + 1)},{" "}
              {formatWeekDay(dateToFrom.getDay())}
            </p>
          </div>
          <div className="ticket__way">
            <div className="ticket__way-time">
              <PlaneUp />
              <span>В пути: {differensFrom}</span>
              <PlaneDown />
            </div>
            <div className="hr"></div>
            <div className="ticket__way-uid">
              <span className="ticket__uid">
                {segmentToFrom.departureAirport.uid}
              </span>
              <span>{transfer(flight.flight.legs[1].segments)}</span>
              <span className="ticket__uid">
                {segmentToTo.arrivalAirport.uid}
              </span>
            </div>
          </div>
          <div className="ticket__to">
            <p className="ticket__time">
              {dateToTo.getHours()}:{formatMinutes(dateToTo.getMinutes())}
            </p>
            <p className="ticket__city">{segmentToTo.arrivalCity.caption}</p>
            <p className="ticket__date">
              {dateToTo.getDate()} {formatMonth(dateToTo.getMonth() + 1)},{" "}
              {formatWeekDay(dateToTo.getDay())}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightItem;

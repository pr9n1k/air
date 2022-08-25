import React from "react";
import PlaneDown from "../assets/PlaneDown";
import PlaneUp from "../assets/PlaneUp";

const FlightItem = () => {
  return (
    <div className="flight__item ticket">
      <div className="ticket__leftsite">
        <p className="ticket__price">2000,00 руб.</p>
        <button className="btn btn-primary">Выбрать билет</button>
      </div>
      <div className="ticket__rightsite">
        <div className="ticket__iarline">Авикомпания</div>
        <div className="ticket__info">
          <div className="ticket__from">
            <p className="ticket__time">20:00</p>
            <p className="ticket__city">Москва</p>
            <p className="ticket__date">19 сен, пн</p>
          </div>
          <div className="ticket__way">
            <div className="ticket__way-time">
              <PlaneUp />
              <span>В пути: 2ч 45м</span>
              <PlaneDown />
            </div>
            <div className="hr"></div>
            <div className="ticket__way-uid">
              <span className="ticket__uid">DME</span>
              <span>1 пересадка</span>
              <span className="ticket__uid">KGD</span>
            </div>
          </div>
          <div className="ticket__to">
            <p className="ticket__time">22:00</p>
            <p className="ticket__city">Ростов-на-Дону</p>
            <p className="ticket__date">19 сен, пн</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightItem;

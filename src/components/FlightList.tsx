import React from "react";
import { Flight } from "../types/Flight";
import FlightItem from "./FlightItem";

type FlightListProps = {
  flights: Flight[];
};

const FlightList: React.FC<FlightListProps> = ({ flights }) => {
  return (
    <div className="flight__list">
      {flights.map((item, i) => {
        return <FlightItem flight={item} key={i} />;
      })}
    </div>
  );
};

export default FlightList;

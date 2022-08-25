import React from "react";
import Filter from "../components/Filter";
import Layout from "../components/Layout";
import FlightList from "./../components/FlightList";

const Air = () => {
  return (
    <Layout>
      <div className="air">
        <Filter />
        <div className="air__content">
          <FlightList />
          <button className="btn btn-secondary">Показать еще</button>
        </div>
      </div>
    </Layout>
  );
};

export default Air;

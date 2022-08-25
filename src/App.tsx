import React from "react";
import FlightService from "./api/flight";
import Air from "./pages/Air";

function App() {
  const [res, setRes] = React.useState();
  React.useEffect(() => {
    FlightService.getFlights().then((response) => {
      console.log(response.data.result.flights);
    });
  }, []);

  return (
    <div className="App">
      <Air />
    </div>
  );
}

export default App;

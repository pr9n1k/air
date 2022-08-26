export const transfer = (flight: any[]) => {
  return flight.length === 1
    ? ""
    : flight.length === 2
    ? "1  пересадка"
    : flight.length === 3
    ? "2 пересадки"
    : "более 2х пересадок";
};

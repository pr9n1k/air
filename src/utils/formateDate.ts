import { differenceDate } from "./differenceDate";

export const formatMonth = (number: number) => {
  return number === 1
    ? "янв"
    : number === 2
    ? "фев"
    : number === 3
    ? "мар"
    : number === 4
    ? "апр"
    : number === 5
    ? "май"
    : number === 6
    ? "июн"
    : number === 7
    ? "июл"
    : number === 8
    ? "авг"
    : number === 9
    ? "сен"
    : number === 10
    ? "окт"
    : number === 11
    ? "ноя"
    : number === 12
    ? "дек"
    : "";
};

export const formatWeekDay = (number: number) => {
  return number === 1
    ? "пн"
    : number === 2
    ? "вт"
    : number === 3
    ? "ср"
    : number === 4
    ? "чт"
    : number === 5
    ? "пт"
    : number === 6
    ? "сб"
    : number === 7
    ? "вс"
    : "";
};

export const formatMinutes = (minutes: number) => {
  return minutes < 10 ? `0${minutes}` : minutes;
};

export const formatDifferenceDate = (first: Date, second: Date) => {
  const { day, hours, minutes } = differenceDate(first, second);
  if (day) {
    return `${day}д ${hours}ч ${formatMinutes(minutes)}м`;
  } else if (minutes) {
    return `${hours}ч ${formatMinutes(minutes)}м`;
  } else {
    return `${formatMinutes(minutes)}м`;
  }
};

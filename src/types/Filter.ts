export interface Filter {
  maxCount: number;
  transfer: number[];
  minPrice: number;
  maxPrice: number;
  sort: valueSort;
}

export enum valueSort {
  "MinMax",
  "MaxMin",
  "Time",
  "Default",
}

export const Sort = [
  {
    title: "По возрастанию цены ",
    value: valueSort.MinMax,
  },
  {
    title: "По убыванию цены ",
    value: valueSort.MaxMin,
  },
  {
    title: "По времени в пути ",
    value: valueSort.Time,
  },
];

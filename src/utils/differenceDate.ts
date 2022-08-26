export const differenceDate = (first: Date, second: Date) => {
  let difference: number = 0;
  if (first.getTime() > second.getTime()) {
    difference = first.getTime() - second.getTime();
  } else {
    difference = second.getTime() - first.getTime();
  }

  const day =
    difference / (1000 * 60 * 60 * 24) > 1
      ? Math.floor(difference / (1000 * 60 * 60 * 24))
      : 0;
  const dayOnMs = day * 1000 * 60 * 60 * 24;

  const hours =
    difference / (1000 * 60 * 60) > 1
      ? Math.floor((difference - dayOnMs) / (1000 * 60 * 60))
      : 0;
  const hoursOnMs = hours * 1000 * 60 * 60;

  const minutes = Math.floor((difference - dayOnMs - hoursOnMs) / (60 * 1000));

  return { day, hours, minutes };
};

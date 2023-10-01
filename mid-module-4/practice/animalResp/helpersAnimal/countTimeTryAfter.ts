export const countTimeTryAfter = (currTime: string): string => {
  const currTimeArr: string[] = currTime.split(":");

  let curHour: number = +currTimeArr[0];
  let currMin: number = +currTimeArr[1];
  let tryAfterMin: number = currMin + 10;

  if (tryAfterMin > 59) {
    tryAfterMin = 0 + 10;
    curHour += 1;
  }

  if (curHour > 23) curHour = 0;

  return `${curHour}:${tryAfterMin}`;
};

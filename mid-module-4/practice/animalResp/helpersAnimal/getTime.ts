import { countTimeTryAfter } from "./countTimeTryAfter";

export function getTime(): string {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  const currTime = `${hours}:${min}`;

  return countTimeTryAfter(currTime);
}

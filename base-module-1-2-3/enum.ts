enum Directions {
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
}

enum TimingFunc {
  EASE = "ease",
  EASE_IN = "ease-in",
  LINEAR = "linear",
}

const frame = (el: string, dir: Directions, timeFunc: TimingFunc) => {
  if (dir === Directions.BOTTOM) {
    console.log(timeFunc);
  }
};

frame("id", Directions.TOP, TimingFunc.EASE);

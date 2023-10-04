interface ISquare {
  sides: number;
  area: number;
}

interface IRect {
  a: number;
  b: number;
  area: number;
}

// Перегрузка функций
function calcArea(a: number): ISquare;
function calcArea(a: number, b: number): IRect;

function calcArea(a: number, b?: number): ISquare | IRect {
  if (b) {
    return {
      a,
      b,
      area: a * b,
    };
  } else {
    return { sides: a, area: a * a };
  }
}

calcArea(4);
calcArea(2, 6);

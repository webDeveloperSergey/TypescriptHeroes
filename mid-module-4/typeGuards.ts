const printMsgPro = (msg: string[] | number | boolean): void => {
  if (Array.isArray(msg)) {
    console.log(msg.join(","));
  } else if (isNumber(msg)) {
    console.log(msg);
  } else {
    console.log(msg);
  }
};

// Predicate
function isNumber(msg: unknown): msg is number {
  return typeof msg === "number";
}

// =============================================================

interface Car {
  engine: string;
  wheels: { quantity: number; type: string };
}

interface Ship {
  engine: string;
  sail: string;
}

function repairVehicle(vehicle: Car | Ship): void {
  // TypeFlow
  if (isCar(vehicle)) {
    // Точно здесь имеем машину
    console.log(vehicle.engine);
    console.log(vehicle.wheels);
  } else if (isShip(vehicle)) {
    // Точно здесь имеем корабль
    console.log(vehicle.engine);
    console.log(vehicle.sail);
  } else {
    // Попадем еа "never", если ни одна из проверок не дала нам положительный ответ
    console.log(vehicle); // (parameter) vehicle: never - код никогда не дойдет до этого момента
  }
}

// Predicate
// function isCar(car: Car | Ship): car is Car {
//   return "wheels" in car;
// }

// Более продвинутая реализация Predicate (для более сложных структур)
function isCar(car: Car | Ship): car is Car {
  return (car as Car).wheels.quantity !== undefined;
}

// Обычный Predicate (для менее сложных структур)
function isShip(ship: Car | Ship): ship is Ship {
  return "sail" in ship;
}

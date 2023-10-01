type Vehicle = ICar | IShip | IAirplane | ISuperAirplane;

interface ICar {
  name: "car";
  engine: string;
  wheels: { quantity: number; type: string };
}

interface IShip {
  name: "ship";
  engine: string;
  sail: string;
}

interface IAirplane {
  name: "airplane";
  engine: string;
  wings: string;
}

// Новый интерфейс, который к нам пришел
interface ISuperAirplane {
  name: "smth";
  engine: string;
  wings: string;
}

// Более продвинутая реализация Predicate (для более сложных структур)
function isCar2(car: Vehicle): car is ICar {
  return (car as Car).wheels.quantity !== undefined;
}

// Обычный Predicate (для менее сложных структур)
function isShip2(ship: Vehicle): ship is IShip {
  return "sail" in ship;
}

function repairVehicle2(vehicle: Vehicle): void {
  switch (vehicle.name) {
    case "car":
      console.log(vehicle.wheels);
      break;
    case "ship":
      console.log(vehicle.sail);
      break;
    case "airplane":
      console.log(vehicle.wings);
      break;
    case "smth": // Обработка нового интерфейса ISuperAirplane (при добавление этого кейса - код отрабатывает, как надо в vehicle при ветке default прокидывается never, поскольку мы обработали все кейсы и до него код не дойдет)
      console.log(vehicle.wings);
      break;
    default:
      // Сейчас мы забыли обработать новый интерфейс, который к нам пришел и tps нам ничего об этом не говорит
      // Он тупо прокинет его в самую конечную ветку условий, где у нас что-то логируется или во все возвращается ошибка

      // FIXME: !!! Код будет отрабатывать не верно !!! (при отсутствии 49 - 50 строк)
      console.log(vehicle); // (parameter) vehicle: ISuperAirplane

      // Чтобы избежать такого поведения достаточно сделать следующие:
      const smth: never = vehicle; // Type 'ISuperAirplane' is not assignable to type 'never'.
    // Сейчас компилятор не соотносит тип "never" с новопришедшим "ISuperAirplane" и таким образом мы можем отлавливать ошибки
    // Соответственно если мы добавим доп кейс для нового интерфейса в default значением vehicle будет снова "never" и ошибки не будет, что будет говорить нам о том, что бы обработали все возможные условия
  }
}

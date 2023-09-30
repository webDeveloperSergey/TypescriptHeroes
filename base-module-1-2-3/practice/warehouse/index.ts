type PrintReportFn = (someData: ITotalWarehouse) => string;
type StatusProduct = "empty" | number;

// структура данных склада с одеждой
type ClothesWarehouseProduct = "jackets" | "hats" | "socks" | "pants";
type ClothesWarehouse = Record<ClothesWarehouseProduct, StatusProduct>;

// структура данных склада с канцтоварами
type StationeryWarehouse = {
  scissors: StatusProduct;
  paper: Exclude<StatusProduct | boolean, number>;
};

// структура данных склада с бытовой техникой
type AppliancesWarehouseProduct = "dishwashers" | "cookers" | "mixers";
type AppliancesWarehouse = Record<AppliancesWarehouseProduct, StatusProduct>;

// общая структура данных, наследует все данные из трех выше
// + добавляет свои =============== PS для приличия использовал хотя бы 1 интерфейс :D
interface ITotalWarehouse
  extends ClothesWarehouse,
    StationeryWarehouse,
    AppliancesWarehouse {
  deficit?: boolean;
  date?: Date;
}

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: ITotalWarehouse = {
  jackets: 5,
  hats: "empty",
  socks: "empty",
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: "empty",
  mixers: 14,
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

const printReport: PrintReportFn = (data: ITotalWarehouse) => {
  let result: string;
  const needItemArr: string[] = [];

  for (let key in data) {
    const parameter = data[key as keyof ITotalWarehouse];
    parameter === "empty" ? needItemArr.push(key) : null;
  }

  needItemArr.length !== 0
    ? (result = `We need this items: ${needItemArr.join(", ")}`)
    : (result = "Everything fine");

  return result;
};

console.log(printReport(totalData));

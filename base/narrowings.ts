/* 
  Словарь сужений: 
    * typeof - проверка на конкретный тип (typeof msg === "string")
    * in - проверяет наличие ключа в объекте ("system" in readings)
    * instanceof - проверяет является ли значения экземпляром класса (x instanceof Date)
*/

const printMsg = (msg: string | number): void => {
  if (typeof msg === "string") {
    console.log(msg.toLocaleUpperCase);
  } else {
    console.log(msg.toExponential);
  }

  // Вне механизма сужения msg остается являться юнионом
  console.log(msg); // - (parameter) msg: string | number
};

const printMsg2 = (msg: string | number | boolean): void => {
  // Сужения можно комбинировать, если у двух типов данных есть одни и те же методы, которые нам нужно применить
  if (typeof msg === "string" || typeof msg === "number") {
    console.log(msg.toString);
  } else {
    console.log(msg.valueOf);
  }
};

printMsg(4);
printMsg("Hello");

const printReadings = (a: number | string, b: number | boolean): void => {
  // Пример сужения, когда мы ориентируемся на сравнение двух значений
  if (a === b) {
    console.log(a, b);
  }
};

const printReadings2 = (a: number[] | string): void => {
  // Можем использовать методы и без сужения
  console.log(a.slice(0, 3)); // метод slice истин как для массива - так и для строки
};

const printReadings3 = (a: number[] | string): void => {
  // Пример проверки, где мы отталкиваемся от 1-ого типа значения
  if (Array.isArray(a)) {
    a.filter((item) => console.log(item));
  }
};

const checkReadings = (
  readings: { system: number } | { user: number }
): void => {
  // Можно делать проверки по ключу в объекте
  if ("system" in readings) {
    // Если system существует в нашем объекте, то мы можем его использовать
    console.log(readings.system);
  } else {
    console.log(readings.user);
  }
};

const logValue = (x: string | Date): void => {
  // Проверка с классами
  if (x instanceof Date) {
    console.log(x.getDay); // в данном случаем мы имеет ввиду, что "x" - это экземпляр Даты
  } else {
    console.log(x.toLowerCase);
  }
};

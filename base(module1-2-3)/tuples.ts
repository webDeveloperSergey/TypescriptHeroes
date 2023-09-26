const userDataTpl: [boolean, number, string] = [true, 23, "Maks"]; // Кортеж (Tuple) - неизменяемая структура данных с определенным порядком

const res = userDataTpl.map((item) => `${item} - data`); // Можно затолкать в массив строк

const [isBth, age, nameUser] = userDataTpl; // Деструктуризировать данне

// Есть возможность расширять тюпл на неопределенное кол-во данных
const userDataTpl2: [boolean, number, ...string[]] = [true, 23, "Sam", "Bov"]; // Кортежу присуще такая такая конструкция. Сообщает нам о том, что в конце будет неопределенное кол-во стрингов.
const userDataTpl3: [...boolean[], number, string] = [true, true, 23, "Sam"]; // Это также будет верно, если мы захотим обозначить неопределенное кол-во бул значений вначале.
const userDataTpl4: [boolean, ...number[], string] = [true, 23, 44, "Sam"]; // Такая конструкция правдива и для чисел по середине.

// ! Примечание
// const userDataTpl5: [boolean, ...number[], ...string[]] = [true, 23, 44, "Sam", "Sam"];  Данные финт ушами с деструктуризицией работает только с 1 элементом тюпла.

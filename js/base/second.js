"use strict";
// структура данных склада с одеждой
// главный объект со всеми данными, должен подходить под формат TotalWarehouse
const totalData = {
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
function printReport(data) {
    const neededItems = [];
    for (let key in data) {
        const param = data[key];
        param === 'empty' ? neededItems.push(key) : null;
    }
    if (neededItems.length !== 0) {
        return `We need this items: ${neededItems.join(', ')}`;
    }
    return "Everything fine";
}
console.log(printReport(totalData));

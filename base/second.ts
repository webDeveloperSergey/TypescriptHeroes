// структура данных склада с одеждой

interface IClothesWarehouse {
	jackets: "empty" | number;
	hats: "empty" | number;
	socks: "empty" | number;
	pants: "empty" | number;
}

// структура данных склада с канцтоварами

interface IStationeryWarehouse {
	scissors: "empty" | number;
	paper: "empty" | boolean;
}

// структура данных склада с бытовой техникой

interface IAppliancesWarehouse {
	dishwashers: "empty" | number;
	cookers: "empty" | number;
	mixers: "empty" | number;
}

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

interface ITotalWarehouse extends IClothesWarehouse, IStationeryWarehouse, IAppliancesWarehouse {
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

function printReport(data: ITotalWarehouse):string{

    const neededItems: string[] = [];

    for(let key in data){
        const param = data[key as keyof ITotalWarehouse];
        param === 'empty' ? neededItems.push(key) : null;
    }

    if(neededItems.length !== 0){
       return `We need this items: ${neededItems.join(', ')}`; 
    }

	return "Everything fine";
}

console.log(printReport(totalData));

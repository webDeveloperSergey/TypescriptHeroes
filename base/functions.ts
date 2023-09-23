const currRate: string = "1.05";

// Тип "Never" - функция абсолютно ничего не вернет. Never используется обычно для ошибок
const createErr = (msg: string) => {
  throw new Error();

  // while(true) {} - также вернет Never. Бесконечная рекурсия тоже возвращает Never
};

const fetchCurr = (response: string): number => {
  const data: number = JSON.parse(response);
  return data;
};

function transferEurToUsd(
  available: boolean,
  amount: number,
  commission: number
): void {
  if (available) {
    let res = fetchCurr(currRate) * amount * commission;
    console.log(res);
  } else if (!available) {
    console.log("Сейчас обмен недоступен");
  }
  createErr("Error");
}

transferEurToUsd(true, 500, 1.05);

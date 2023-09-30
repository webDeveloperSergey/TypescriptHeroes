const userData =
  "{'isBirthdayData': true, 'ageData': 22, 'userNameData': 'Sam'}";

const safeParse = (str: string): unknown => {
  return JSON.parse(str);
};

const data = safeParse(userData);

const transferData = (data: unknown): void => {
  if (typeof data === "string") {
    console.log(data.toLocaleLowerCase);
  } else if (typeof data === "object" && data) {
    console.log(data);
  } else {
    console.error("Some error");
  }
};

//  ======================================

try {
  if (1) {
    throw new Error("error");
  }
} catch (error) {
  // error распознается typescript - ом как unknown. Разработчик может прокинуть любую ошибку со своим классом
  // либо вообще просто строкой, поэтому нам для компилятора надо проработать все возможные кейсы)
  if (error instanceof Error) {
    console.log(error.message);
  } else if (typeof error === "string") {
    console.log(error);
  }
}

//  ======================================
type T0 = any | unknown; // any перекроет unknown
type T1 = number | unknown; // unknown перекроет number
type T3 = any & unknown; // any перекроет unknown
type T4 = number & unknown; // number перекроет unknown

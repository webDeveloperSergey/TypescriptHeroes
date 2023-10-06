// Ограничения
interface ParentOfUser {
  mother: string;
  father: string;
}

// четко говорим о том, что дженерик Parents должен принимать объект как минимум из двух параметров "мама" и "папа"
interface IUser2<Parents extends ParentOfUser> {
  login: string;
  age: number;
  parents: Parents;
}

const user2: IUser2<{ mother: string; father: string }> = {
  age: 33,
  login: "str",
  parents: { mother: "Anna", father: "Sam" },
};

// =====================================================================

function depositMoney<T extends string | number>(data: T): T {
  console.log(`req to server  with amount: ${data}`); // data: T extends string | number
  return data;
}

depositMoney(500);
depositMoney("500");
//depositMoney(false) // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)

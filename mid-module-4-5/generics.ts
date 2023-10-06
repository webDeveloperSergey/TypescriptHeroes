interface IPrint<T> {
  design: T;
}

const printUS: IPrint<number> = {
  design: 10,
};

const printEU: IPrint<string> = {
  design: "10",
};

// ===================================================================

function processingData<T>(data: T): T {
  return data;
}

let res1 = processingData(1); // в соло подхвати let res1: number
let res2 = processingData("1"); // в соло подхвати let res2: string
let res3 = processingData<string>("1");

// ===================================================================

function processingDataPro<T, S>(data: T, options: S): string {
  switch (typeof data) {
    case "string":
      return `${data}, speed: ${options}`;
      break;
    case "number":
      return `${data}, speed: ${options}`;
      break;
    default:
      return "No valid";
  }
}

let resPro1 = processingDataPro(1, "op1");
let resPro2 = processingDataPro("1", "op2");
let resPro3 = processingDataPro<number, string>(1, "op3");

// ===================================================================

// В дженерик можно задавать массивом <T>(data: T[]) = <number>(data: number[])
function processingDataProArr<T, S>(data: T[], options: S): string {
  switch (typeof data) {
    case "string":
      return `${data}, speed: ${options}`;
      break;
    case "number":
      return `${data}, speed: ${options}`;
      break;
    default:
      return "No valid";
  }
}

let resProArr1 = processingDataProArr([1], "op1");
let resProArr2 = processingDataProArr(["1"], "op2");
let resProArr3 = processingDataProArr<number, string>([1], "op3");

// ===================================================================

function processing<T>(data: T): T {
  return data;
}

interface IProcessingFn {
  <T>(data: T): T;
}

type DataServerKey =
  | "processing1"
  | "processing2"
  | "processing3"
  | "processing4";

type DataServer = Record<DataServerKey, <T>(data: T) => T>;
// или
type DataServer2 = Record<DataServerKey, typeof processing>;
// или
type DataServer3 = Record<DataServerKey, IProcessingFn>;

interface IDataServer {
  processing1: <T>(data: T) => T;
  processing2: <T>(data: T) => T;
  processing3: <T>(data: T) => T;
  processing4: <T>(data: T) => T;
}

const server: IDataServer = {
  processing1(data) {
    console.log(data);
    return data;
  },

  // Встречается чаще всего
  processing2: <T>(data: T) => {
    return data;
  },
  processing3: (data) => {
    return data;
  },

  // Можно задавать другой функцией, которая подходит по описанному типу
  processing4: processing,
};

let newFunc: IProcessingFn = processing;

// ==============================================================

interface IUser<ParentsData> {
  login: string;
  age: number;
  parents: ParentsData;
}

const user: IUser<{ mom: string; father: string }> = {
  // Проблема в том, что можно передать даже просто строку
  // { mom: string; father: string } ----> string - Ошибки не будет
  age: 33,
  login: "str",
  parents: { mom: "Anna", father: "Sam" },
};

interface ICompany {
  name: string;
  debts: number;
  depart: Depart;
  management: {
    owner: string;
  };
}

interface Depart {
  [key: string]: string;
}

// Indexed Access Types ==========
type CompanyDebtsType = ICompany["debts"];
// type CompanyDebtsType = typeof ICompany.debts // Будет ошибка.  Так нельзя у типа получать св-во
type CompanyOwnerType = ICompany["management"]["owner"];
type CompanyDepartType = ICompany["depart"];
type CompanyType = ICompany[keyof ICompany]; // CompanyType хранит юнион тип из всех св-в объекта

const hh: ICompany = {
  name: "HH",
  debts: 5000,
  depart: {
    dev: "dev",
    ceo: "ceo",
  },
  management: {
    owner: "John",
  },
};

const google = {
  name: "HH",
  open: true, // не пропустит в функции, поскольку четко унаследовались от ICompany (name и debts должны быть железно)
};

const printDebts = <T extends ICompany, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S
): void => {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
};

printDebts(hh, "name", "debts");
// printDebts(google, "name", "open"); // err

// ========================================================================
const amazon: ICompany = {
  name: "Amazon",
  debts: 1000,
  depart: {
    dev: "dev",
    ceo: "ceo",
  },
  management: {
    owner: "Sam",
  },
};

type AmazonKeys = keyof typeof amazon;

const keys2: AmazonKeys = "debts";

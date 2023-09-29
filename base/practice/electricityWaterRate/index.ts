import {
  CalculatePayments,
  ElectricityUserData,
  SendInvoice,
  TupleNumbers,
  WaterUserData,
} from "./@typesRate";

const electricityUserData: ElectricityUserData = {
  readingsEl: 95,
  unitsEl: "kWt",
  mode: "double",
};

const waterUserData: WaterUserData = {
  readingsWtr: 3,
  unitsWtr: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: TupleNumbers = [0, 0]; // [electricity, water]

const calculatePayments: CalculatePayments = (
  { mode, readingsEl },
  { readingsWtr },
  elRate,
  wRate
) => {
  if (mode === "double" && readingsEl < 50) {
    monthPayments[0] = readingsEl * elRate * 0.7;
  } else {
    monthPayments[0] = readingsEl * elRate;
  }

  monthPayments[1] = readingsWtr * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice: SendInvoice = (
  monthPayments,
  { readingsEl, unitsEl },
  { readingsWtr, unitsWtr }
) => {
  const text = `    Hello!
    This month you used ${readingsEl} ${unitsEl} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${readingsWtr} ${unitsWtr} of water
    It will cost: ${monthPayments[1]}€`;

  return text;
};

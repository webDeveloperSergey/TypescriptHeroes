type ElectricityUserData = {
  readingsEl: number;
  unitsEl: string;
  mode: string;
};
type WaterUserData = { readingsWtr: number; unitsWtr: string };
type TupleNumbers = [number, number];

type CalculatePayments = (
  elData: ElectricityUserData,
  wData: WaterUserData,
  elRate: number,
  wRate: number
) => void;

type SendInvoice = (
  monthPayments: TupleNumbers,
  electricityUserData: ElectricityUserData,
  waterUserData: WaterUserData
) => string;

export type ElectricityUserData = {
  readingsEl: number;
  unitsEl: string;
  mode: string;
};
export type WaterUserData = { readingsWtr: number; unitsWtr: string };
export type TupleNumbers = [number, number];

export type CalculatePayments = (
  elData: ElectricityUserData,
  wData: WaterUserData,
  elRate: number,
  wRate: number
) => void;

export type SendInvoice = (
  monthPayments: TupleNumbers,
  electricityUserData: ElectricityUserData,
  waterUserData: WaterUserData
) => string;

export type Animal = "cat" | "dog" | "bird";

export enum AnimalStatus {
  FULFILLED = "available",
  REJECTED = "not available",
}

export interface IAnimalData {
  animal: Animal;
  breed: string;
  location: string;
  sterilized?: string;
  age?: number;
}

export interface IAnimalRejData {
  message: string;
  nextUpdateIn: Date | number | string;
}

export interface IRespAnimal {
  status: AnimalStatus.FULFILLED | AnimalStatus.REJECTED;
  data: IAnimalData | IAnimalRejData;
}

export type AnimalReq = Omit<IAnimalData, "location" | "age">;
export type AnimalReqMore = Pick<IAnimalData, "location" | "age">;

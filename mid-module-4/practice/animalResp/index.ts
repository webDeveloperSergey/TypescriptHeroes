import {
  AnimalReq,
  IAnimalData,
  IRespAnimal,
  AnimalStatus,
  IAnimalRejData,
  AnimalReqMore,
} from "./@typesAnimal";
import { isAvailable, isNotAvailable } from "./animalPredicate";

const animalReq: AnimalReq = {
  animal: "cat",
  breed: "Siamese",
  sterilized: "no",
};

const animalReqMore: AnimalReqMore = {
  location: "London",
  age: 1,
};

const animalRejData: IAnimalRejData = {
  message: "No results found for your search",
  nextUpdateIn: `${new Date().getHours()}:${new Date().getMinutes() + 10}`,
};

// Response #1
const respAnimalFirst: IRespAnimal = {
  status: AnimalStatus.FULFILLED,
  data: { ...animalReq, ...animalReqMore },
};

// Response #2
const respAnimalSecond: IRespAnimal = {
  status: AnimalStatus.REJECTED,
  data: animalRejData,
};

function checkAnimalData(animal: IRespAnimal): IAnimalData | string {
  if (isAvailable(animal.status)) {
    return animal.data as IAnimalData;
  } else if (isNotAvailable(animal.status)) {
    const rejectedData = animal.data as IAnimalRejData;
    return `${rejectedData.message}, you can try in ${rejectedData.nextUpdateIn}`;
  } else {
    return "Incorrectly transmitted request";
  }
}

console.group("@First Request");
console.log(checkAnimalData(respAnimalFirst));

console.log(" ");

console.group("@Second Request");
console.log(checkAnimalData(respAnimalSecond));

// Запуск:
// ts-node mid-module-4/practice/animalResp/index.ts

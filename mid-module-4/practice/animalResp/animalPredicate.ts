import { AnimalStatus } from "./@typesAnimal";

export function isAvailable(
  status: AnimalStatus
): status is AnimalStatus.FULFILLED {
  return status === "available";
}

export function isNotAvailable(
  status: AnimalStatus
): status is AnimalStatus.REJECTED {
  return status === "not available";
}

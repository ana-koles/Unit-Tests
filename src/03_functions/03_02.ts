import { BuildingType, CityType, HousesType } from "../02_objects/02_types";

export const addMoneyToBudget = (building: BuildingType, additionalBudget: number) => {

  building.budget += additionalBudget;
}

export const repairHouse = (house: HousesType) => {
  house.repaired = true;
}

export const changeStuffQuantity = (building: BuildingType, quantity: number) => {
  building.stuffCount += quantity;
}

export const createGreetingMessage = (city: CityType) => {
  return `Hello citizens of ${city.title}`;
}
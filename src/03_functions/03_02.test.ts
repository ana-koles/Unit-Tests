import { CityType} from "../02_objects/02_types";
import { addMoneyToBudget, repairHouse, changeStuffQuantity, createGreetingMessage } from "./03_02";

let city: CityType;


beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        build: 2012,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: 'Happy Street'
          }
        }
      },
      {
        build: 2008,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: 'White Street'
          }
        }
      },
      {
        build: 2020,
        repaired: false,
        address: {
          number: 101,
          street: {
            title: 'Happy Street'
          }
        }
      }

    ],
    governmentBuildings: [
      {
        type: 'HOSPITAL',
        budget: 200000,
        stuffCount: 208,
        address: {
          street: {
            title: 'Central Str'
          }
        }
      },
      {
        type: 'FIRE STATION',
        budget: 500000,
        stuffCount: 1000,
        address: {
          street: {
            title: 'South Str'
          }
        }
      }
    ],
    citizensNumber: 1000000
  }
})

test('budget should be changed for hospital', () => {
  addMoneyToBudget(city.governmentBuildings[0], 100000);
  addMoneyToBudget(city.governmentBuildings[1], -100000);

  expect(city.governmentBuildings[0].budget).toBe(300000);
  expect(city.governmentBuildings[1].budget).toBe(400000);
})

test('house should be repaired', () => {
  repairHouse(city.houses[0]);

  expect(city.houses[0].repaired).toBeTruthy();
})

test('stuff should be increased', () => {
  changeStuffQuantity(city.governmentBuildings[1], 20);

  expect(city.governmentBuildings[1].stuffCount).toBe(1020);
})

test('greeting message should be correct for city', () => {

  let message = createGreetingMessage(city);
  expect(message).toBe('Hello citizens of New York');

  // или
  //expect(createGreetingMessage(city)).toBe('Hello citizens of New York');

})
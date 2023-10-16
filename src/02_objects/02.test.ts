
import { CityType } from "./02_types";

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

//если мы хотим пропустить тест

/* test.skip('test city should contain 3 houses', () = */

test.skip('test city should contain 3 houses', () => {
  expect(city.houses.length).toBe(3);

  expect(city.houses[0].build).toBe(2012);
  expect(city.houses[0].repaired).toBe(false);
  expect(city.houses[0].address.number).toBe(100);
  expect(city.houses[0].address.street.title).toBe('Happy Street');

  expect(city.houses[1].build).toBe(2008);
  expect(city.houses[1].repaired).toBe(false);
  expect(city.houses[1].address.number).toBe(100);
  expect(city.houses[1].address.street.title).toBe('White Street');

  expect(city.houses[2].build).toBe(2020);
  expect(city.houses[2].repaired).toBe(false);
  expect(city.houses[2].address.number).toBe(101);
  expect(city.houses[2].address.street.title).toBe('Happy Street');


})

test.skip('test city should contain hospital and fire station', () => {
  expect(city.governmentBuildings.length).toBe(2);

  expect(city.governmentBuildings[0].type).toBe('HOSPITAL');
  expect(city.governmentBuildings[0].budget).toBe(200000);
  expect(city.governmentBuildings[0].stuffCount).toBe(208);
  expect(city.governmentBuildings[0].address.street.title).toBe('Central Str');

  expect(city.governmentBuildings[1].type).toBe('FIRE STATION');
  expect(city.governmentBuildings[1].budget).toBe(500000);
  expect(city.governmentBuildings[1].stuffCount).toBe(1000);
  expect(city.governmentBuildings[1].address.street.title).toBe('South Str');


})
type StreetType = {
  title: string
}

type HouseAddressType = {
  number: number
  street: StreetType
}

export type HousesType = {
  build: number
  repaired: boolean
  address: HouseAddressType
}

type BuildSAddressType = {
  street: StreetType
}

export type BuildingType = {
  type: 'FIRE STATION' | 'HOSPITAL'
  budget: number
  stuffCount: number
  address:BuildSAddressType
}

export type CityType = {
  title: string
  houses: HousesType[]
  governmentBuildings: BuildingType[]
  citizensNumber: number
}




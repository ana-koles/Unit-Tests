type LocalCityType = {
  title: string
  country: string
}

type AddressType = {
  streetTitle: string
  city: LocalCityType
}

export type TechnologiesType = {
  id: number
  name: string
}

export type StudentType = {
  id: number
  age: number
  name: string
  isActive: boolean
  address: AddressType
  technologies: TechnologiesType[]
}



const student: StudentType = {
  id: 1,
  age: 30,
  name: 'Brad Pitt',
  isActive: false,
  address: {
    streetTitle: 'Surganova 2',
    city: {
      title: 'Minsk',
      country: 'Belarus'
    }
  },
  technologies: [
    {
      id: 1,
      name: 'CSS'
    },
    {
      id: 2,
      name: 'React'
    },
    {
      id: 3,
      name: 'HTML'
    }

  ]
}

console.log(student.technologies[2].name);
import { StudentType, TechnologiesType } from "../02_objects/02";

export function sum(a: number, b: number) {
  debugger;
  return a + b;
}

console.log(sum(sum(1, 2), sum(2, 3)));


export const addTech = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    name: skill
  });
}

export function becomeActive(stud: StudentType) {
  stud.isActive = true;
}

export function doesStudentLiveInCity(stud: StudentType, city: string) {
  return stud.address.city.title === city;
}
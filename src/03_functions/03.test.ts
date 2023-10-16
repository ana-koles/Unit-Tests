import { addTech, becomeActive, doesStudentLiveInCity } from "./03";
import { StudentType } from "../02_objects/02";

let student: StudentType;

beforeEach(() => {
  student = {
    id: 1,
    age: 30,
    isActive: false,
    name: 'Brad Pitt',
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
})

test('new tech skill should be added to student', () => {

  expect(student.technologies.length).toBe(3);

  addTech(student, 'JS');

  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].name).toBe('JS');
  expect(student.technologies[3].id).toBeDefined();
})


test('test student became active', () => {

  becomeActive(student);
  expect(student.isActive).toBe(true);
})

test('does student live in the city', () => {
  let result1 = doesStudentLiveInCity(student, 'Minsk');
  let result2 = doesStudentLiveInCity(student, 'Hong Hong');

  expect(result1).toBe(true);
  expect(result2).toBe(false);
})
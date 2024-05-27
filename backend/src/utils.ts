import { faker } from "@faker-js/faker/locale/en_AU";
import { Person } from "./person/model";

// Using [Faker](https://fakerjs.dev) to generate fresh random values
export const generateData = (total: number): Person[] => {
  const persons: Person[] = [];
  for (let i = 0; i < total; i++) {
    const person: Person = {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      age: faker.number.int({ min: 0, max: 100 }),
      location: faker.location.country(),
    };
    persons.push(person);
  }

  return persons;
};

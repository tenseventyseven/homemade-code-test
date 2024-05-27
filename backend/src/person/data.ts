import { Person } from "./model";
import { generateData } from "../utils";

// Hardcoded proxy for a real datasource
export const TOTAL_PERSONS = 5;

export const findAll = async (): Promise<Person[]> => {
  const persons = generateData(TOTAL_PERSONS);

  return persons;
};

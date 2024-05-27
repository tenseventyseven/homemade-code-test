import { useState } from "react";
import { DropResult } from "@hello-pangea/dnd";

import PersonList from "./PersonList";
import { Person } from "../types";
import { reorder } from "../utils";

export type PersonsProps = {
  initial: Person[];
};

const Persons = ({ initial }: PersonsProps) => {
  const [persons, setPersons] = useState(initial);

  const onDragEnd = ({ destination, source }: DropResult) => {
    // Dropped outside the list
    if (!destination) return;

    // Update the order of persons
    const reordered = reorder(persons, source.index, destination.index);
    setPersons(reordered);
  };

  return <PersonList persons={persons} onDragEnd={onDragEnd} />;
};

export default Persons;

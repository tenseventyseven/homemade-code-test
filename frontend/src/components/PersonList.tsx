import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from "@hello-pangea/dnd";

import PersonListItem from "./PersonListItem";
import { Person } from "../types";

export type PersonListProps = {
  persons: Person[];
  onDragEnd: OnDragEndResponder;
};

const PersonList = ({ persons, onDragEnd }: PersonListProps) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {persons.map((person, index) => (
              <PersonListItem person={person} index={index} key={person.id} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default PersonList;

import { Draggable } from "@hello-pangea/dnd";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";

import { Person } from "../types";

export type PersonListItemProps = {
  person: Person;
  index: number;
};

const PersonListItem = ({ person, index }: PersonListItemProps) => {
  return (
    <Draggable draggableId={person.id} index={index}>
      {(provided) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={person.name}
            secondary={`Age: ${person.age}, Location: ${person.location}`}
          />
        </ListItem>
      )}
    </Draggable>
  );
};

export default PersonListItem;

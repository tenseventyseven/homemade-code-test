import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Persons from "./Persons";
import { Person } from "../types";

describe("Persons", () => {
  const initial: Person[] = [
    {
      id: "1",
      name: "Foo",
      age: 1,
      location: "FooFoo",
    },
    {
      id: "2",
      name: "Bar",
      age: 2,
      location: "BarBar",
    },
  ];

  it("renders the component with expected contents", () => {
    // Arrange
    // Act
    render(<Persons initial={initial} />);

    // Assert
    // Assert that there are two list items
    const listItems = screen.getAllByRole("button");
    expect(listItems).toHaveLength(2);

    // Assert the contents of the first list item
    expect(listItems[0]).toBeInTheDocument();
    expect(listItems[0]).toHaveTextContent("Foo");
    expect(listItems[0]).toHaveTextContent("Age: 1, Location: FooFoo");

    // Assert the contents of the second list item
    expect(listItems[1]).toBeInTheDocument();
    expect(listItems[1]).toHaveTextContent("Bar");
    expect(listItems[1]).toHaveTextContent("Age: 2, Location: BarBar");
  });

  it("drag re-ordering works as expected", async () => {
    // Arrange
    // Act
    render(<Persons initial={initial} />);

    // Get first item
    const element = screen.getAllByRole("button")[0];

    // Move first item to after second item
    const SPACE = { keyCode: 32 };
    const ARROW_DOWN = { keyCode: 40 };
    fireEvent.keyDown(element, SPACE); // Begins the dnd
    fireEvent.keyDown(element, ARROW_DOWN); // Moves the element
    fireEvent.keyDown(element, SPACE); // Ends the dnd

    // Assert
    // Assert that there are two list items
    const listItems = screen.getAllByRole("button");
    expect(listItems).toHaveLength(2);

    // Assert the contents of the first list item (after move)
    expect(listItems[0]).toBeInTheDocument();
    expect(listItems[0]).toHaveTextContent("Bar");
    expect(listItems[0]).toHaveTextContent("Age: 2, Location: BarBar");

    // Assert the contents of the second list item (after move)
    expect(listItems[1]).toBeInTheDocument();
    expect(listItems[1]).toHaveTextContent("Foo");
    expect(listItems[1]).toHaveTextContent("Age: 1, Location: FooFoo");
  });
});

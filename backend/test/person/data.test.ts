import "mocha";
import { expect } from "chai";
import { TOTAL_PERSONS, findAll } from "../../src/person/data";

describe("findAll", () => {
  it("should generate a known number of persons", async () => {
    // Arrange

    // Act
    const result = await findAll();

    // Assert
    // Check expected length of result
    expect(result).to.have.lengthOf(TOTAL_PERSONS);

    // Check expected shape of each item
    result.forEach((person) => {
      expect(person).to.have.property("id").that.is.a("string");
      expect(person).to.have.property("name").that.is.a("string");
      expect(person).to.have.property("age").that.is.a("number");
      expect(person).to.have.property("location").that.is.a("string");
    });
  });
});

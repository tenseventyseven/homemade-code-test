import "mocha";
import { expect } from "chai";
import sinon from "sinon";
import { generateData } from "../src/utils";
import { faker } from "@faker-js/faker/locale/en_AU";
import { Person } from "../src/person/model";

describe("generateData", () => {
  let uuidStub: sinon.SinonStub;
  let fullNameStub: sinon.SinonStub;
  let intStub: sinon.SinonStub;
  let countryStub: sinon.SinonStub;

  beforeEach(() => {
    // Stub Faker methods
    uuidStub = sinon.stub(faker.string, "uuid");
    fullNameStub = sinon.stub(faker.person, "fullName");
    intStub = sinon.stub(faker.number, "int");
    countryStub = sinon.stub(faker.location, "country");
  });

  afterEach(() => {
    // Restore the original methods
    uuidStub.restore();
    fullNameStub.restore();
    intStub.restore();
    countryStub.restore();
  });

  it("should generate a list of fake persons", () => {
    // Arrange
    const fakePersons: Person[] = [
      {
        id: "1",
        name: "Homer Simpson",
        age: 40,
        location: "Australia",
      },
      {
        id: "2",
        name: "Guy Incognito",
        age: 42,
        location: "New Zealand",
      },
    ];

    // Configure the stubs to return predictable values
    uuidStub.onCall(0).returns("1");
    uuidStub.onCall(1).returns("2");
    fullNameStub.onCall(0).returns("Homer Simpson");
    fullNameStub.onCall(1).returns("Guy Incognito");
    intStub.onCall(0).returns(40);
    intStub.onCall(1).returns(42);
    countryStub.onCall(0).returns("Australia");
    countryStub.onCall(1).returns("New Zealand");

    // Act
    const persons = generateData(2);

    // Assert
    expect(persons).to.deep.equal(fakePersons);
  });
});

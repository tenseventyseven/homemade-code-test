import request from "supertest";
import { expect } from "chai";
import { StatusCodes } from "http-status-codes";

import app from "../src/index";
import { TOTAL_PERSONS } from "../src/person/data";

describe("app", async () => {
  it("Returns 404 with expected body for catch-all route", async () => {
    // Arrange
    // Act
    const response = await request(app).post("/invalid/path");

    // Assert
    // Check status code
    expect(response.statusCode).to.equal(StatusCodes.NOT_FOUND);
    // Check return body
    expect(response.body).to.deep.equal({ message: "Not found" });
  });

  it("Returns 200 with expected body for GET /api/v1/persons", async () => {
    // Arrange
    // Act
    const response = await request(app).get("/api/v1/persons");

    // Assert
    // Check status code
    expect(response.statusCode).to.equal(StatusCodes.OK);
    // Check return body
    expect(response.body).to.have.all.keys("persons");
    const data = response.body["persons"];
    expect(data).to.have.lengthOf(TOTAL_PERSONS);
    // Check expected shape of each item
    data.forEach((person) => {
      expect(person).to.have.property("id").that.is.a("string");
      expect(person).to.have.property("name").that.is.a("string");
      expect(person).to.have.property("age").that.is.a("number");
      expect(person).to.have.property("location").that.is.a("string");
    });
  });
});

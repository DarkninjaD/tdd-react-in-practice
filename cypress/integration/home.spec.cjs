/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-query */

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("header contains recipe heading with a message that there are no recipes", () => {
    cy.findByRole("heading").should("contain", "My Recipes");
    cy.get("p").findByText("There are no recipes to list.").should("exist");
  });
});

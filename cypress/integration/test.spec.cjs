/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-query */
describe("test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Should past Q one", () => {
    cy.findByLabelText("Violet").check();
  });
  it("Should past Q two", () => {
    cy.findAllByTestId("check-form").should("have.length", 7);
  });
  it("Should past Q Three", () => {
    cy.findAllByRole("checkbox").should("have.length", 7);
  });
  it("Should past Q Four", () => {
    cy.findByRole("button").click();
  });
  it("Should past Q Five", () => {
    cy.findAllByRole("checkbox").submit();
  });
});

describe("template spec", () => {
  it("passes", () => {
    cy.visit(Cypress.env("baseUrl") || "http://localhost:3000/");
  });
});

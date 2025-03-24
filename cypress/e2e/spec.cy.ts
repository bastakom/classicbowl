describe("template spec", () => {
  it("passes", () => {
    cy.visit(`${process.env.baseUrl || "http://localhost:3000/"}`);
  });
});

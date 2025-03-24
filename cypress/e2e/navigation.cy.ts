describe("navigation tests", () => {
  it("test opening and closing sidebar", () => {
    const baseUrl = Cypress.env("baseUrl") || "http://localhost:3000/";
    cy.visit(baseUrl);
    cy.get(".hamburger-react").click();
    cy.get('[data-id="close-sidebar-menu"]').click();
  });

  it("tests navigation mobile", () => {
    cy.viewport(375, 812);
    cy.visit(Cypress.env("baseUrl") || "http://localhost:3000/");
    cy.get(".hamburger-react").click();
    cy.get('[data-id="close-sidebar-menu"]').click();
  });
});

describe("navigation tests", () => {
  it("test opening and closing sidebar", () => {
    cy.visit(`${process.env.baseUrl || "http://localhost:3000/"}`);
    cy.get(".hamburger-react").click();
    cy.get('[data-id="close-sidebar-menu"]').click();
  });

  it("tests navigation mobile", () => {
    cy.viewport(375, 812);
    cy.visit(`${process.env.baseUrl || "http://localhost:3000/"}`);
    cy.get(".hamburger-react").click();
    cy.get('[data-id="close-sidebar-menu"]').click();
  });
});

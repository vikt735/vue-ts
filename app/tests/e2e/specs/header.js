describe("Test header component", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.setLocalSrorage();
  });
  it("Test about page", () => {
    cy.visit("/");
    cy.get('[data-test="about"]').click();
  });
  it("Test active link", () => {
    cy.get('[data-test="home"]').click();
    cy.get('[data-test="home"]').should("have.class", "router-link-active");
  });

  it("Test lang switcher", () => {
    cy.get('[data-test="ru"]').click();
    cy.contains('[data-test="home"]', "Главная");
  });
  it("Test logout button", () => {
    cy.get('[data-test="logout"]').click();
    cy.url().should("include", "/Login");
  });
});

describe("navigation", () => {
    beforeEach(() => {
      cy.visit("localhost:3000");
    });
    it("switch pages", () => {
      cy.get("a").contains("Home").click();
      cy.url().should("include", "/");

      cy.get("a").contains("Info").click();
      cy.url().should("include", "/info");

      cy.get("a").contains("Spa Services").click();
      cy.url().should("include", "/services");

      cy.get("a").contains("Book Appointment").click();
      cy.url().should("include", "/appointment");

      cy.get("a").contains("Blog").click();
      cy.url().should("include", "/blog");

      cy.get("a").contains("About Us").click();
      cy.url().should("include", "/about");

      cy.get("a").contains("Contact Us").click();
      cy.url().should("include", "/contacts");
    });
});
describe("localization", () => {
    beforeEach(() => {
      cy.visit("localhost:3000");
    });

    it("ENG to RUS", () => {
      cy.get("div").contains("ENG").click();
      cy.get("div").contains("RUS").click();
      cy.get("h1").contains("Собака обожает бегать по грязи?").should("exist");
    });

    it("RUS to ENG", () => {
        cy.get("div").contains("RUS").click();
        cy.get("div").contains("ENG").click();
        cy.get("h1").contains("Your dog running amok in the dirt?").should("exist");
      });
});
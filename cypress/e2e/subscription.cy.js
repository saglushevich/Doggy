describe("subscription", () => {
    beforeEach(() => {
      cy.visit("localhost:3000/info");
    });

    it("subscribe on news", () => {
      cy.get("input[placeholder='Email']").type("s.aglushevich5@gmail.com");
      cy.get("button").contains("Submit").click();
      cy.get("div").contains("We will contact you!").should("exist");
    });

    it("empty email input", () => {
      cy.get("input[placeholder='Email']");
      cy.get("button").contains("Submit").click();
      cy.get("div").contains("Email is required").should("exist");
    });
});
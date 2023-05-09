describe("subscription", () => {
    beforeEach(() => {
      cy.visit("localhost:3000/info");
    });

    it("subscribe on news", () => {
      cy.get("input[placeholder='Email']").type("s.aglushevich5@gmail.com");
      cy.get("button").contains("Submit").click();
      cy.get("div").contains("We will contact you!").should("exist");
    });

    it("Incorrect input", () => {
      cy.get("input[placeholder='Email']").type("se");
      cy.get("button").contains("Submit").click();
      cy.get("div").contains("Enter a valid email").should("exist");
    });
});
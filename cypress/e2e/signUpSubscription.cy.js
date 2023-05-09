describe("sign Up subscription", () => {
    beforeEach(() => {
      cy.visit("localhost:3000");
    });

    it("subscribe on news", () => {
      cy.get("input[placeholder='Email']").first().type("s.aglushevich5@gmail.com");
      cy.get("button").contains("Sign Up").click();
      cy.get("div").contains("We will contact you!").should("exist");
    });
});
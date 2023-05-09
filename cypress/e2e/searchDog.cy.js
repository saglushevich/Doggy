describe("search dog", () => {
    beforeEach(() => {
      cy.visit("localhost:3000/info");
    });

    it("not found status", () => {
        cy.get("input[placeholder='Search']").type("Sibsaxeriban")
        cy.get("li").contains("Not found! Try again!").should("exist");
    });

    it("loading status", () => {
        cy.get("input[placeholder='Search']").type("Siberian")
        cy.get("li").contains("Loading...").should("exist");
    });

    it("find dog", () => {
        cy.get("input[placeholder='Search']").type("Siberian")
        cy.get("li").contains("Siberian Husky").should("exist");
    });
});
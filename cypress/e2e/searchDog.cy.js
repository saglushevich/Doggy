describe("search dog", () => {
    beforeEach(() => {
      cy.visit("localhost:3000/info");
    });

    it("find dog", () => {
        cy.get("input[placeholder='Search']").type("Siberian")
        cy.get("li").contains("Siberian Husky").should("exist");
    });
});
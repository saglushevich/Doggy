describe("contacts", () => {
    beforeEach(() => {
      cy.visit("localhost:3000/contacts");
    });

    it("emptry inputs", () => {
        cy.get("button").contains("Submit").click();
        cy.get("div").contains("Name is required").should("exist");
    });

    it("send contact data", () => {
        cy.get("input[placeholder='First name']").type("SomeName")
        cy.get("input[placeholder='Last name']").type("SomeLastName")
        cy.get("input[placeholder='Email']").first().type("s.aglushevich5@gmail.com")
        cy.get("input[placeholder='Phone number']").type("375331234567")
        cy.get("textarea").type("SomeMessageFromContactForm")

        cy.get("button").contains("Submit").click();

        cy.get("div").contains("We will contact you!").should("exist");
    });
});
describe("booking", () => {
    beforeEach(() => {
      cy.visit("localhost:3000/appointment");
    });

    it("emptry inputs", () => {
        cy.get("button").contains("Book Appointment").click().should("be.disabled");
        // cy.get("button").contains("Book Appointment")
    });

    it("make booking", () => {
        cy.get("input[placeholder='First name']").type("SomeName")
        cy.get("input[placeholder='Last name']").type("SomeLastName")
        cy.get("input[placeholder='Email']").first().type("s.aglushevich5@gmail.com")
        cy.get("input[placeholder='Phone number']").type("375331234567")
        cy.get("label").contains("11am - 12pm").click()

        cy.get("input[placeholder='Credit Card Number']").type("1234123412341234")
        cy.get("input[placeholder='Expiry Date']").type("12/12")
        cy.get("input[placeholder='CVV']").type("123")
        cy.get("input[placeholder='Name on Card']").type("Name Name")

        cy.get("button").contains("Book Appointment").click();

        cy.get("div").should("have.class", "paypal-buttons")
    });
});
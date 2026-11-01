describe("People Table App", () => {
  beforeEach(() => {
    cy.visit("https://mefextabledata.vercel.app/"); // change to your app URL
  });
  
  it("UI renders: title, , empty state", () => {
    cy.contains("Add People to Table").should("be.visible");
    cy.contains("No entries yet").should("be.visible");
  });

  it("UI renders: inputs, buttons", () => {
    cy.get('input[name="place"]').should("be.visible");
    cy.get('input[name="name"]').should("be.visible");
    cy.get('input[name="age"]').should("be.visible");
    cy.contains("button", "Add").should("be.visible");
    cy.contains("button", "Clear").should("be.visible");
  });

  it("should be able to add a data", () => {
    cy.get('input[name="place"]').type("Pune");
    cy.get('input[name="name"]').type("Riya");
    cy.get('input[name="age"]').type("9");
    cy.contains("button", "Add").click();
    cy.contains("Riya").should("be.visible");
  });

  it("should be able to remove a data", () => {
    cy.get('input[name="place"]').type("Pune");
    cy.get('input[name="name"]').type("Riya");
    cy.get('input[name="age"]').type("9");
    cy.contains("button", "Add").click();
    cy.contains("Riya").should("be.visible");
    cy.contains("Remove").click();
    cy.contains("No entries yet").should("be.visible");
  });
});


import { login } from "../pageObjects/login/login";

const loginPage = new login();

describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://gor-pathology.web.app/");
    loginPage.emailInput("test@kennect.io");
    loginPage.passwordInput("Qwerty@1234");
    loginPage.loginButton()
      .should("have.text", "Login")
      .click();
    cy.get(".MuiAutocomplete-popupIndicator")
      .click()
      .type("VITAMIN B12, SERUM - 900₹");
    cy.get("#patient-test-option-0").click();
    cy.get(".MuiSelect-root").click();
    cy.get('[data-value="10"]').click();
    let subtotal, total;
    cy.get(".jss75")
      .invoke("text")
      .then((text) => {
        const number = parseInt(text.slice(0, 3));
        subtotal = number;
        cy.log("Text content: ", number);
        cy.wrap(subtotal).should("eq", 900);
      });
    cy.get(".jss78")
      .invoke("text")
      .then((text) => {
        const number = parseInt(text.slice(0, 3));
        total = number;
        cy.log("Text content: ", number);
        cy.wrap(total).should("eq", 810);
      });
    
  });
});

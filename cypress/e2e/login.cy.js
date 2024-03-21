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
      .should('be.visible',{timeout: 15*1000});
  });
});

import { login } from "../pageObjects/Login/login";

const loginPage = new login();

Cypress.Commands.add('login', (email, password) => {
    cy.visit("https://gor-pathology.web.app/");
    loginPage.emailInput(email);
    loginPage.passwordInput(password);
    loginPage.loginButton().click();
  });
  
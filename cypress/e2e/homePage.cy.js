import HomePage from "../pageObjects/homePage/homePage";
import { login } from "../pageObjects/Login/login";
const email = "test@kennect.io";
const password = "Qwerty@1234";
let subtotal, total;
const homePage = new HomePage();

describe("Your test suite", () => {
  beforeEach(() => {
    cy.login(email, password);
  });

  it("passes", () => {

    cy.log("Selecting patient test option");
    homePage.selectPatientTestOption();
    homePage.selectTest().click();
    cy.log("Clicking patient selection dropdown");
    homePage.clickPatientSelectionDropDown();

    cy.log("Selecting discount on test");
    homePage.selectDiscountOnTest();

    // Get and validate subtotal text
    cy.log("Getting and validating subtotal text");
    homePage.getSubtotalText().then((text) => {
      const number = parseInt(text.slice(0, 3));
      cy.log("Subtotal: ", number);
      cy.wrap(number).should("eq", 900);
    });

    // Get and validate total text
    cy.log("Getting and validating total text");
    homePage.getTotalText().then((text) => {
      const number = parseInt(text.slice(0, 3));
      cy.log("Total: ", number);
      cy.wrap(number).should("eq", 810);
    });
  });
});

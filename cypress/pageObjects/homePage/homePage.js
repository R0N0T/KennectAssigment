class HomePage {
  selectPatientTestOption() {
    return cy.get("#patient-test").click();
  }

  clickPatientSelectionDropDown() {
    return cy.get(".MuiSelect-root").click();
  }
  selectTest() {
    return cy.get('#patient-test-option-3');
  }
  selectDiscountOnTest() {
    return cy.get('[data-value="10"]').click();
  }

  getSubtotalText() {
    return cy.get(".jss93").invoke("text");
  }

  getTotalText() {
    return cy.get(".jss96").invoke("text");
  }
}

export default HomePage;

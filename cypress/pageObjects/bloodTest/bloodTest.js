// BloodTestPage.js

class BloodTestPage {
    visit() {
      cy.visit("https://gor-pathology.web.app/");
    }
  
    clickPatientsSidebar() {
      cy.get('[href="/patients"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
    }
  
    clickAddPatient() {
      cy.get('[style="display: flex; align-items: center;"] > a > .MuiButtonBase-root > .MuiButton-label').click();
    }
  
    enterFirstName(firstName) {
      cy.get("input.MuiInputBase-input.MuiOutlinedInput-input").eq(0).type(firstName);
    }
  
    enterEmail(email) {
      cy.get("input.MuiInputBase-input.MuiOutlinedInput-input").eq(1).type(email);
    }
  
    enterPhoneNumber(phoneNumber) {
      cy.get("input.MuiInputBase-input.MuiOutlinedInput-input").eq(2).type(phoneNumber);
    }
    getAlertMessage() {
      return cy.get('.MuiAlert-message');
    }
    clickNext() {
      cy.get(".jss82").click();
    }
  
    enterHeight(height) {
      cy.get("input.MuiInputBase-input.MuiOutlinedInput-input").eq(0).clear().type(height);
    }
  
    enterWeight(weight) {
      cy.get("input.MuiInputBase-input.MuiOutlinedInput-input").eq(1).clear().type(weight);
    }
  
    enterAge(age) {
      cy.get("input.MuiInputBase-input.MuiOutlinedInput-input").eq(2).clear().type(age);
    }
  
    enterBloodPressure(bloodPressure) {
      cy.get("input.MuiInputBase-input.MuiOutlinedInput-input").eq(3).clear().type(bloodPressure);
    }
  
    enterPulseRate(pulseRate) {
      cy.get("input.MuiInputBase-input.MuiOutlinedInput-input").eq(4).clear().type(pulseRate);
    }
  
    selectGender(gender) {
      cy.get("#mui-component-select-gender").click();
      cy.get(`[data-value="${gender}"]`).click();
    }
  
    enterTestName(testName) {
      cy.get("#patient-test").click().type(testName);
    }
  
    selectTest() {
      cy.get("#patient-test-option-0").click();
    }
  
    clickDiscount() {
      cy.get("em").click();
    }
  
    selectDiscount() {
      cy.get('[data-value="10"]').click();
    }
  
    clickLab() {
      cy.get("#patient-tests-labs").click();
    }
  
    selectLab() {
      cy.get("#patient-tests-labs-option-0").click();
    }
  
    enterDoctor(doctorName) {
      cy.get(
        'input.MuiInputBase-input.MuiOutlinedInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd.MuiOutlinedInput-inputAdornedEnd'
      ).eq(2).click().type(`${doctorName}{enter}`);
    }
  
    clickDoctorCommission() {
      cy.get("#mui-component-select-doctor_commission").click();
    }
  
    selectDoctorCommission() {
      cy.get('[data-value="10"]').click();
    }
  
    clickAddButton() {
      cy.get(
        'span.MuiIconButton-label span.material-icons.MuiIcon-root[aria-hidden="true"]'
      ).contains("add_box").invoke("click");
    }
  
    clickSaveEquipment() {
      cy.get('[title="Save"] > .MuiIconButton-label > .material-icons').invoke("click");
    }
  
    clickSave() {
      cy.get('.jss82').click();
    }
  
    clickDashboardSidebar() {
      cy.get('[href="/dashboard"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
    }
  
    checkPatientAdded() {
      cy.get("li.MuiListItem-container").should("have.text", "hello");
    }
  }
  
  export default new BloodTestPage();
  
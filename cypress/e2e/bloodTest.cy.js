import BloodTestPage from "../pageObjects/bloodTest/bloodTest";

const email = "test@kennect.io";
const password = "Qwerty@1234";
describe("Blood test calculator test", () => {
  beforeEach(() => {
    cy.login(email, password);
  });

  it("Test case 1 - Add patient and perform blood test", () => {
    BloodTestPage.visit();
    BloodTestPage.clickPatientsSidebar();
    BloodTestPage.clickAddPatient();

    // Add patient details
    BloodTestPage.enterFirstName("Test");
    BloodTestPage.enterEmail("test@mail.com");
    BloodTestPage.enterPhoneNumber("1234567890");
    BloodTestPage.clickNext();

    // Perform blood test
    BloodTestPage.enterHeight("180");
    BloodTestPage.enterWeight("83");
    BloodTestPage.enterAge("23");
    BloodTestPage.enterBloodPressure("180");
    BloodTestPage.enterPulseRate("100");
    BloodTestPage.selectGender("male");
    BloodTestPage.clickNext();
    BloodTestPage.enterTestName("VITAMIN B12, SERUM - 900₹");
    BloodTestPage.selectTest();
    BloodTestPage.clickDiscount();
    BloodTestPage.selectDiscount();
    BloodTestPage.clickLab();
    BloodTestPage.selectLab();
    BloodTestPage.enterDoctor("Atharva Hiwase");
    BloodTestPage.selectDoctor();
    BloodTestPage.clickDoctorCommission();
    BloodTestPage.selectDoctorCommission();
    BloodTestPage.clickAddButton();
    BloodTestPage.clickSaveEquipment();
    BloodTestPage.clickSave();
    BloodTestPage.getAlertMessage().should('be.visible', { timeout: 15000 });
    BloodTestPage.clickDashboardSidebar();

    // Assertions
    BloodTestPage.checkPatientAdded();
  });
});

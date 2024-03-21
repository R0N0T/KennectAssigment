export class login {
    emailInput(email) {
        return cy.get('input[name="email"]').type(email);
    }

    passwordInput(password) {
        return cy.get('input[name="password"]').type(password);
    }

    loginButton() {
        return cy.get('.jss9 .MuiButton-contained > .MuiButton-label');
    }
}
class CheckoutPage {
    constructor() {
        this.emailInput = '[data-testid="email"]';
        this.guestLoginButton = '[data-testid="guestLogin"]';
        this.firstNameInput = '[data-testid="firstName"]';
        this.lastNameInput = '[data-testid="lastName"]';
        this.phoneInput = '[data-testid="phone"]';
        this.countryFieldButton = '[data-testid="countryField"] button';
        this.countryListItem = 'ul li';
        this.cityAutocomplete = '[data-testid="googleAutocomplete"]';
        this.postCodeInput = '[name="shippingAddress.postCode"]';
        this.addressInput = '[name="shippingAddress.address"]';
        this.deliveryMethodRadioGroup = '[data-testid="costOfDeliveryRadioGroup"]';
        this.nextStepButton = '[data-testid="goToNextStep"]';
        this.orderSuccessMessage = 'p[style="font-weight: bold;"]';

    }

    proceedAsGuest(email) {
        cy.get(this.emailInput).type(email);
        cy.get(this.guestLoginButton).click();
    }

    fillShippingDetails(firstName, lastName, phone, country, city, postCode, address) {
        cy.get(this.firstNameInput).type(firstName);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.phoneInput).type(phone);
        cy.get(this.countryFieldButton).click();
        cy.get(this.countryListItem).contains(country).click();
        cy.get(this.cityAutocomplete).type(city);
        cy.get(this.countryListItem).contains(city).click();
        cy.get(this.postCodeInput).type(postCode);
        cy.get(this.addressInput).type(address);
    }

    selectDeliveryMethod() {
        cy.get(this.deliveryMethodRadioGroup).should('be.visible');
    }

    proceedToNextStep() {
        cy.get(this.nextStepButton).click();
    }

    verifyOrderSuccess() {
        cy.get(this.orderSuccessMessage).should('have.text', 'Your order has been placed successfully.');
    }
}

export const checkoutPage = new CheckoutPage();

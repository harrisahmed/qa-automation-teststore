class CartPage {
    constructor() {
        this.basketMenuButton = 'div[aria-label="Open basket menu"]';
        this.goToPaymentButton = 'a[text="Go to payment"]';
    }

    openBasketMenu() {
        cy.get(this.basketMenuButton).click();
    }

    goToPayment() {
        cy.get(this.goToPaymentButton).click();
    }

}

export const cartPage = new CartPage();

class ProductsPage {
    constructor() {
        this.inStockFilter = '.G1mGG';
        this.loader = '.IXR2q svg';
        this.productCardContainer = '[data-testid="productCardContainer"]';
        this.productCardTitleContainer = '[data-testid="productCardTitleContainer"] p';
        this.promoBadge = '.fLzVe';
        this.addToCartButton = '[data-testid="addToCartButton"]';
        this. dismissCartNotificationButton = 'div[role="status"] svg';
    }

    filterInStock() {
        cy.get(this.inStockFilter).contains('In stock').click();
    }

    stockFilterEnabled() {
        return cy.get(this.loader);
    }

    getProductCards() {
        return cy.get(this.productCardContainer);
    }

    addToCart(productIndex) {
        cy.get(this.addToCartButton).eq(productIndex).click();
    }

    dismissCartNotification() {
        cy.get(this.dismissCartNotificationButton).click();
    }
}

export const productsPage = new ProductsPage();

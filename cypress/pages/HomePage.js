class HomePage {
    constructor() {
        this.cookieFooter = '[data-testid="cookieFooter"]';
        this.internalProductsLink = '[text="Internal"]';
        this.discountLabelclass = '.-OLB3'
    }

    visit() {
        cy.visit('/');
    }

    acceptCookies() {
        cy.get(this.cookieFooter).should('be.visible').then(($cookieFooter) => {
            cy.wrap($cookieFooter).contains('Accept all').click();
        });
    }

    discountLabel(){
        cy.get(this.discountLabelclass).should('contain.text', '50 %').should('be.visible')
    }

    navigateToInternalProducts() {
        cy.get(this.internalProductsLink).click();
    }
}

export const homePage = new HomePage();

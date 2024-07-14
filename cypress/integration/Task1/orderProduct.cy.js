import { homePage } from '../../pages/HomePage';
import { productsPage } from '../../pages/ProductsPage';
import { cartPage } from '../../pages/CartPage';
import { checkoutPage } from '../../pages/CheckoutPage';
import {user} from '../../fixtures/userData.json';

describe('Order the first in stock non-promo product', () => {
    beforeEach(() => {
        homePage.visit();
    });

    it('should order the first in stock non-promo product', () => {

        homePage.acceptCookies();
        homePage.navigateToInternalProducts();

        productsPage.filterInStock();
        productsPage.stockFilterEnabled().should('be.visible');

        // Find the first non-promo product and add to cart
        const nonPromoProducts = [];
        productsPage.getProductCards().each(($productCard, index) => {
            const fLzVeExists = $productCard.find('.fLzVe').length > 0;

            if (!fLzVeExists) {
                cy.wrap($productCard).find('[data-testid="productCardTitleContainer"] p').invoke('text').then(productName => {
                    nonPromoProducts.push({ index, productName: productName.trim() });
                });
            } else {
                cy.wrap($productCard).find('.fLzVe').invoke('text').then((text) => {
                    if (text.trim().toLowerCase() === 'new') {
                        cy.wrap($productCard).find('[data-testid="productCardTitleContainer"] p').invoke('text').then(productName => {
                            nonPromoProducts.push({ index, productName: productName.trim() });
                        });
                    }
                });
            }
        }).then(() => {
            productsPage.addToCart(nonPromoProducts[0].index);
        });

        productsPage.dismissCartNotification();
        cartPage.openBasketMenu();
        cartPage.goToPayment();

        checkoutPage.proceedAsGuest(user.email);
        checkoutPage.fillShippingDetails(user.firstName, user.lastName, user.phone, user.country, user.city, user.postCode, user.address);
        checkoutPage.selectDeliveryMethod();
        checkoutPage.proceedToNextStep();
        checkoutPage.verifyOrderSuccess();
    });

    it('verifying that the 50% off label is visible', ()=>{

        homePage.acceptCookies();
        homePage.discountLabel();
    })
});

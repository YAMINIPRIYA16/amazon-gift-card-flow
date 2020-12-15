import {pageFunctions} from '../pageFunctions/pageFunctions'
const pagefunctions = new pageFunctions()
describe('Addition of Gift card in the cart',()=>{
    
    it('should verify whether the gift card with name Amazon Pay eGift card is listed in the page',()=>{
        pagefunctions.searchForGiftCardsAndNavigateToSearchResultsPage()
        pagefunctions.selectGiftCardAndNavigateToGiftCardPage('Amazon Pay eGift Card');
    })
    it.only('should verify whether the gift card in the cart is same as the one selected',()=>{
        pagefunctions.addAGiftCardToTheCart()
        pagefunctions.navigateToCartPageAndCheckForTheItemAdded()
        })

    it('should verify the subtotal depending on the quantity added',()=>{
      pagefunctions.checkForTheSubtotalDependingOnTheQuantity()
    })    
})
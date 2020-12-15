import {Utils} from '../utils/utils'
import commonObjects from '../commonObjects/commonObjects'

const utils =new Utils
export class pageFunctions{
    constructor(){}
searchForGiftCardsAndNavigateToSearchResultsPage(){
    utils.visitPage('/')
    utils.getAndType(commonObjects.searchBox,'Gift cards')
    utils.getAndType(commonObjects.searchBox,'{enter}')
}

selectGiftCardAndNavigateToGiftCardPage(giftCardName){
    utils.containsAssertion(giftCardName)
    
}

addAGiftCardToTheCart(){
    utils.visitPage('https://www.amazon.in/Amazon-mail-Pay-Gift-Card/dp/B00KGE2ER2/ref=sr_1_1?dchild=1&keywords=Gift+cards&qid=1607755678&sr=8-1')
     utils.getClick(commonObjects.addToCartButton)
}

navigateToCartPageAndCheckForTheItemAdded(){
    utils.getClick(commonObjects.cartButton)
    utils.containsAssertion('Amazon Pay eGift Card');
}

checkForTheSubtotalDependingOnTheQuantity(){
    this.addAGiftCardToTheCart()
    this.navigateToCartPageAndCheckForTheItemAdded()
    utils.containsAssertion('Subtotal (1 item)')
    


}

}
    

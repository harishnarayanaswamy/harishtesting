function addQuantityToCart(quantity,price) {
// INSERT CODE HERE
    return price * quantity;

}

function getQuantityMessage(quantity) {
// if object's getQuantity() is over 0, then it should say "In stock".
// otherwise it should say "Out of stock"
// return the messages
// INSERT CODE HERE
    if (quantity > 0) { return 'In stock'; } else if (quantity == 0) { return 'Out of stock'; } else if (quantity == -1){ return 'Select a fruit before proceeding'; }
}
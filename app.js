'use strict';

// Global vars


/* Create template object for RawMaterial coffee and Tea products*/

function RawMaterialItem(name, img, price) {
  this.name = name;
  this.img = img;
  this.price = price;
}
//limit quanitity input in form on HTML





/*********************** ALL CART RELATED CODE *************************************************/
// Add item to cart
// Add selected item to cart
// Add storage
// Add updateCart function
// Add updateTotal function
// Will need to write method for rendering product in cart
// Remove Items from Cart




// cart constructor
function Cart(cartItem, price) {
  // an array of cartitem instances
  this.cartItems = [];
  this.price = 0;
}


//cartitem constructor
// the instance of the New cart item will be included in local storage section
// We will then use the push method to add new item into cart (this line of code will also be in storage section)
var CartItem = function (name, price, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.price = price;
};


// this will be called in event listener and we will pass in three params
// Created a new cart item and then push it into CartItems prop
// the three params are what is needed to add item to cart
Cart.prototype.addItems = function(name, price, quantity) {
  console.log('items are added to cart');
  var item = new CartItem(name, price, quantity);
  this.cartItem.push(item);
};


// Method for rendering product in cart
RawMaterialItem.prototype.renderProductToCart = function() {
var target = document.getElementById('item');
}

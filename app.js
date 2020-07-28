'use strict';

// Global vars

//var productArray = []; // not sure if we need this
var quantity = 4;
// or do we have global vars for cartItems, quanitity and price?




/* Create template object for RawMaterial coffee and Tea products*/

function RawMaterialItem(name, img, price, quantity) {
  this.name = name;
  this.img = img;
  this.price = []; // 
  this.quantity = [];
  var cartItems = [];
}









// cart constructor
function Cart(cartItems, price) {
  this.cartItems = []; // an array of cartitem instances 
  this.price = 0;
}

//cartitem constructor
// the instance of the New cart item will be included in local storage section
// We will then use the push method to add new item into cart (this line of code will also be in storage section)
var CartItem = function (name, price, quantity) {
  this.name = name;
  this.quantity = quantity;   
  this.price = price;
}


Cart.prototype.addItems = function('RawMaterialItem') {
  console.log('items are added to cart');
  this.RawMaterialItem.push()
}

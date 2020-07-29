'use strict';

// Global vars


/* Created template object for RawMaterial coffee and Tea products with params */

// function RawMaterialItem(name, img, description, price) {
//   this.name = name;
//   this.img = img;
//   this.description = description;
//   this.price = price;
//}
//limit quanitity input in form on HTML





/*********************** ALL CART RELATED CODE *************************************************/

// Add item to cart (DONE)
/*TODO:Fetch cart items from local storage
      - pull local storage items and add each item to cart
      - JSON Parse to take items out of local storage
      - GetItems
*/


// Will need to write method for rendering product in cart (DONE)
//TODO: Remove Items from Cart (use fake items)

/*TODO:Add last table row to Cart that has grandtotal
    -will have to do some math here for totals row (keep in mind the cookies project, price * quantity = subtotal)
    - Add all subtotals to variable
    - Do all math in the lop where price and quantity exist*/


//Ask Mike to add this id cartItemList to table
//Ask Mike to add th's for first row (product, quantity, price, total)
// Ask Mike to move input out of table


// cart constructor
function Cart() {
  // an array of cartitem instances
  this.cartItems = [];
  this.total = 0; // the loop adds subtotals to grandtotal
}


//cartitem constructor
// the instance of the New cart item will be included in local storage section (we can save props or instance in LS)

// We will then use the push method to add new item into cart (this line of code will also be in storage section)
var CartItem = function (name, src, price, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.price = price;
  this.src = src;
};


// Created a new cart item and then push it into CartItems prop
// the three params are what is needed to add item to cart
Cart.prototype.addItem = function(name, price, quantity) {
  console.log('items are added to cart');
  var item = new CartItem(name, price, quantity);
  this.cartItems.push(item);
};


// Method for rendering product in cart
Cart.prototype.renderCart = function() {
  var target = document.getElementById('cartItemList');
  // for loop here to cycle through this.cartitems
  for(var i = 0; i <this.cartItems.length; i++) {
    var cartItemHome = document.createElement('tr');
    var displayedImage = document.createElement('td');
    var itemImage = document.createElement('img');
    itemImage.src = this.cartItems[i].src;
    itemImage.alt = this.cartItems[i].name;
    displayedImage.appendChild(itemImage);
    cartItemHome.appendChild(displayedImage);
    var displayedName = document.createElement('td');
    displayedName.textContent = this.cartItems[i].name;
    cartItemHome.appendChild(displayedName);
    var displayedPrice = document.createElement('td');
    displayedPrice.textContent = this.cartItems[i].price;
    cartItemHome.appendChild(displayedPrice);
    var displayedQuantity = document.createElement('td');
    displayedQuantity.textContent = this.cartItems[i].quantity;
    cartItemHome.appendChild(displayedQuantity);
    target.appendChild(cartItemHome);
  }
};
// will need to call render product



// when we call addItem, a new object will be created
var userCart = new Cart();
userCart.addItem('coffeeOne', 100, 3);
userCart.addItem('greenTea',50,1);
userCart.renderCart();

//PM TUES TASKS
// I worked on adding table rows using loop
// instianted istances of object so that the renderCart had something to render
'use strict';

//in index.html link cart.js first before app.js


//create instance of cart here
// when we call addItem, a new object will be created
var userCart = new Cart();
userCart.addItem('coffeeOne', 100, 3);
userCart.addItem('greenTea',50,1);
userCart.renderCart();



var tea_1 = document.getElementById('tea-1');
tea_1.addEventListener('submit', formHandler);

function formHandler(event) {
  event.preventDefault();
  console.log(event.target);
  var name = event.target['name'].value;
  var quantity = event.target['qty'].value;
  var price = event.target['price'].value;
  var src = event.target['src'].value;
  // need to call add item to cart function
  // want to save cart to local storage
  console.log(name, quantity,price, src);
}



var tea_2 = document.getElementById('tea-2');
tea_2.addEventListener('submit', formHandler);




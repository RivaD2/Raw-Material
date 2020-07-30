'use strict';

//in index.html link cart.js first before app.js

var rawMaterialArray = [];

// PM TASKS ON WED
//added loop to cycle through each product
// added submit button to each form on index.html
// created event listener for each addtocart item
// deleted script tag from cart.html because app.js is meant for index.html
// created an array to use for LS creation


// created 4 loop to iterate through each coffee and tea item
// set loop to <= 4 since we have 4 of each item and we are starting at one for each
for(var i = 1; i <= 4; i++) {
  var tea_1 = document.getElementById('tea-' + i);
  tea_1.addEventListener('submit', formHandler);
  console.log('addedTea', tea_1);
  var coffee_1 = document.getElementById('coffee-' + i);
  coffee_1.addEventListener('submit', formHandler);
}

function formHandler(event) {
  event.preventDefault();
  console.log(event.target);
  var name = event.target['name'].value;
  var quantity = event.target['qty'].value;
  var price = event.target['price'].value;
  var src = event.target['src'].value;
  console.log(name, quantity,price, src);
  // due to time constraints, created obj literal instead of importing cart class
  // created an array and pushed the object literal on to material array (empty array of products)
  // Saved the array to LS just like in BusMall
  var productData = {
    name: name,
    quantity: quantity,
    price:price,
    src:src
  };
  rawMaterialArray.push(productData);
  var rawMaterialArrayString = JSON.stringify(rawMaterialArray);
  localStorage.setItem('rawMaterials', rawMaterialArrayString); 
  console.log(rawMaterialArray.length + ' items in Cart'); // the number of items in the cart is here
}






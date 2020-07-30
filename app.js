'use strict';


var rawMaterialArray = [];

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
  saveToLocalStorage(rawMaterialArray);
}

// Needed to pull this out of the handler as a single responsibility principal so I could use it on the remove items function
function saveToLocalStorage(productDataArray) {
  var rawMaterialArrayString = JSON.stringify(productDataArray);
  localStorage.setItem('rawMaterials', rawMaterialArrayString); 
  console.log(productDataArray.length + ' items in Cart'); // the number of items in the cart is here
}




// PM TASKS ON WED TO PUT ON PROJECT REPORT # 4
//added loop to cycle through each product
// added submit button to each form on index.html
// created event listener for each addtocart item
// deleted script tag from cart.html because app.js is meant for index.html
// created an array to use for LS creation
// created object literal to push onto rawMaterialArray
// stored array in Local Storage
// created initalize cart function, added class using setAttribute to img in cart.html (just like I did in Busmall)
//adding class to img will allow us to style
// pulled cart from LS and parsed/intialized objects


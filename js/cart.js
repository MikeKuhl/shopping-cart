/* global Cart */
"use strict";

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById("cart");
table.addEventListener("click", removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let clear = document.getElementById("tr");
  clear.remove();
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  let parentEl = document.querySelector("tbody");
  // TODO: Create a TR

  let tableRow = document.createElement("tr");

  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.length; i++) {
    parentEl.appendChild(tableRow);
    tableRow.textContent = cart[i];
    itemInfo = cart[i];

    // TODO: Create a TD for the delete link, quantity,  and the item
    let deleteLink = document.createElement("td");
    let tItem = document.createElement("td");
    let tQuantity = document.createElement("td");

    deleteLink.textContent = "Delete";
    tItem.textContent = itemInfo.name;
    tQuantity.textContent = itemInfo.quantity;

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tableRow.appendChild(deleteLink);
    tableRow.appendChild(tItem);
    tableRow.appendChild(tQuantity);

    parentEl.appendChild(tableRow);
  }
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  Storage.removeItem("products");
  // TODO: Save the cart back to local storage

  // TODO: Re-draw the cart table
}

// This will initialize the page and draw the cart on screen
renderCart();

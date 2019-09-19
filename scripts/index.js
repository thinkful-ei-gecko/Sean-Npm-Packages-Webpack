'use strict';
import $ from 'jquery';
import shoppingList from './shopping-list'

/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars
export const store = {
  items: [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ],
  hideCheckedItems: false,
  searchTerm: ''
};

function main() {
  shoppingList.bindEventListeners();
  shoppingList.render();
}

$(main);

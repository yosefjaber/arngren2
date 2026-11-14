// ---------------------------------------------------------------
// THE STORE: shared data and the functions that change it
// ---------------------------------------------------------------
// Many components need the same information. The header needs the cart
// count, the cart page needs the cart items, every component needs the
// language... Instead of passing all of that down from component to
// component, we keep it in ONE place: this file.
//
// Two Svelte things to know before reading:
//
//  1. `$state(...)` makes a "reactive" value. When it changes, every part
//     of the page that uses it updates by itself. (This only works in
//     files that end in `.svelte.js`, which is why this file is named that way.)
//
//  2. Any component can `import { store } from '../lib/store.svelte.js'`
//     and read or change `store.something` directly.
// ---------------------------------------------------------------

import { products, findProduct } from './products.js';
import { translations } from './translations.js';

// ---------------------------------------------------------------
// 1. THE SHARED STATE
// ---------------------------------------------------------------

// Small helper: if the visitor's browser is set to Norwegian, start in Norwegian.
function guessLanguage() {
  const browserLanguage = navigator.language.toLowerCase(); // for example "nb-NO" or "en-US"
  const isNorwegian = ['nb', 'nn', 'no'].some((code) => browserLanguage.startsWith(code));
  return isNorwegian ? 'no' : 'en';
}

// Small helper: if the visitor's computer is set to dark mode, start in dark mode.
function guessDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export const store = $state({
  lang: guessLanguage(), // 'en' or 'no'
  dark: guessDarkMode(), // true or false

  query: '',             // what the visitor typed in the search box
  category: 'all',       // 'all' or a category id like 'ebikes'
  sort: 'featured',      // 'featured', 'priceLow' or 'priceHigh'

  cart: [],              // a list of lines like { id: 'pink-fatbike', qty: 2 }
  lastOrder: null,       // filled in when an order is placed (used by the thank-you page)

  notice: '',            // the key of a short message to show ("addedToCart"), or ''
});

// ---------------------------------------------------------------
// 2. LANGUAGE HELPERS
// ---------------------------------------------------------------

// t('addToCart')  ->  "Add to cart" (or "Legg i handlekurv" in Norwegian)
// t('thanksTitle', { name: 'Ola' })  ->  "Thank you, Ola!"
export function t(key, values = {}) {
  // If a translation is missing we show the key itself, so it is easy to spot.
  let text = translations[store.lang][key] ?? key;

  // Fill in the blanks: replace {name} with the value we were given.
  for (const blank in values) {
    text = text.replaceAll(`{${blank}}`, values[blank]);
  }
  return text;
}

// For texts from products.js that look like { en: '...', no: '...' }.
//   localized(product.name)  ->  the name in the current language
// Some values (like '1000 W') are the same in both languages, so they are
// plain strings. In that case we just return the string as it is.
export function localized(text) {
  if (typeof text === 'string') return text;
  return text[store.lang];
}

// ---------------------------------------------------------------
// 3. SEARCH, FILTER AND SORT
// ---------------------------------------------------------------

// All the words we search in for one product. We include BOTH languages,
// so searching "sykkel" still works even if the page is in English.
function searchableText(product) {
  return [
    product.name.en,
    product.name.no,
    product.description.en,
    product.description.no,
  ]
    .join(' ')
    .toLowerCase();
}

// Compares two products by price. Products with "price on request"
// (price: null) always go to the end of the list.
function comparePrice(a, b, direction) {
  if (a.price === null && b.price === null) return 0;
  if (a.price === null) return 1;
  if (b.price === null) return -1;
  return (a.price - b.price) * direction; // direction is 1 (low to high) or -1 (high to low)
}

// Returns the list of products that match the current category, search and sort.
// Components call this inside their markup, so the grid updates by itself
// whenever the search box, category or sort changes.
export function visibleProducts() {
  const words = store.query.trim().toLowerCase();

  const list = products.filter((product) => {
    const inCategory = store.category === 'all' || product.category === store.category;
    const matchesSearch = words === '' || searchableText(product).includes(words);
    return inCategory && matchesSearch;
  });

  if (store.sort === 'priceLow') list.sort((a, b) => comparePrice(a, b, 1));
  if (store.sort === 'priceHigh') list.sort((a, b) => comparePrice(a, b, -1));

  return list;
}

// How many products are in a category (used for the numbers on the category buttons).
export function productsInCategory(categoryId) {
  return products.filter((p) => p.category === categoryId).length;
}

// Puts the search, category and sort back to how they were at the start.
export function clearFilters() {
  store.query = '';
  store.category = 'all';
  store.sort = 'featured';
}

// ---------------------------------------------------------------
// 4. THE CART
// ---------------------------------------------------------------

let noticeTimer; // remembers the timer that hides the "Added" message

export function addToCart(id) {
  const line = store.cart.find((l) => l.id === id);
  if (line) {
    line.qty += 1; // already in the cart: just add one more
  } else {
    store.cart.push({ id: id, qty: 1 }); // new in the cart
  }

  // Show a short message for two seconds.
  store.notice = 'addedToCart';
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => (store.notice = ''), 2000);
}

// change is +1 or -1. If the quantity drops to 0, the item is removed.
export function changeQuantity(id, change) {
  const line = store.cart.find((l) => l.id === id);
  if (!line) return;

  line.qty += change;
  if (line.qty < 1) removeFromCart(id);
  if (line.qty > 99) line.qty = 99;
}

export function removeFromCart(id) {
  store.cart = store.cart.filter((l) => l.id !== id); // keep every line except this one
}

// Total number of items (shown on the cart button in the header).
export function cartCount() {
  return store.cart.reduce((sum, line) => sum + line.qty, 0);
}

// Cart lines together with their full product, so a component
// can show the name, emoji and price.
export function cartLines() {
  return store.cart.map((line) => ({
    id: line.id,
    qty: line.qty,
    product: findProduct(line.id),
  }));
}

// Total price. Items with "price on request" (null) cannot be added up.
export function cartTotal(lines = cartLines()) {
  let total = 0;
  for (const line of lines) {
    if (line.product.price !== null) {
      total += line.product.price * line.qty;
    }
  }
  return total;
}

// True if at least one item in the cart has "price on request".
export function cartHasQuoteItems(lines = cartLines()) {
  return lines.some((line) => line.product.price === null);
}

// Called by the order form. We have no server, so we just remember the order
// in memory, empty the cart and go to the thank-you page.
export function placeOrder(customer) {
  const lines = cartLines();

  store.lastOrder = {
    number: Math.floor(100000 + Math.random() * 900000), // a random 6-digit number
    customer: { name: customer.name, email: customer.email },
    lines: lines,
    total: cartTotal(lines),
    hasQuoteItems: cartHasQuoteItems(lines),
  };

  store.cart = [];
  location.hash = '#/thanks';
}

// ---------------------------------------------------------------
// 5. PAGES (a tiny "router")
// ---------------------------------------------------------------
// We use the part of the web address after the # to decide which page to show:
//
//   mysite.com/             -> home page
//   mysite.com/#/product/hoverpod  -> product page for 'hoverpod'
//   mysite.com/#/cart       -> cart page
//   mysite.com/#/thanks     -> thank-you page
//
// Links are just normal  <a href="#/cart">  tags. The best part: the browser's
// back button works for free, and you can share a link to a product.

export const route = $state({
  page: 'home', // 'home', 'product', 'cart' or 'thanks'
  productId: null, // only used when page is 'product'
});

function updateRoute() {
  // "#/product/hoverpod"  ->  ["product", "hoverpod"]
  const [page, id] = location.hash.replace(/^#\/?/, '').split('/');

  if (page === 'product') {
    route.page = 'product';
    route.productId = id;
  } else if (page === 'cart') {
    route.page = 'cart';
  } else if (page === 'thanks') {
    route.page = 'thanks';
  } else if (page === 'about') {
    route.page = 'about';
  } else {
    route.page = 'home';
  }

  window.scrollTo(0, 0); // jump to the top of the new page
}

window.addEventListener('hashchange', updateRoute); // runs when the address changes
updateRoute(); // and once right now, for the page we opened

// The "Surprise me" button: open a random product (a little nod to the
// original site, where you never know what you will find).
export function goToRandomProduct() {
  const random = products[Math.floor(Math.random() * products.length)];
  location.hash = '#/product/' + random.id;
}

let getProduct = document.querySelector('meta[itemprop="name"]');
let productName = String(getProduct.getAttribute("content"));
let itemPrice = document.querySelector('meta[itemprop="price"]');
let itemPriceNumber = parseInt(itemPrice.getAttribute("content"));
let errorGettingName =
  "Ha habido un error al leer el nombre del producto, por favor intentelo en otro producto";
let priceCurrency = document.querySelector('meta[itemprop="priceCurrency"]');
let priceCurrencySymbol = getCurrencySymbol();
let addToCartButton = undefined;
let modifiedProductsCart = [];

addToCartButton.addEventListener("click", (product) => {
  readName();
});

function getCurrencySymbol() {
  switch (priceCurrency.getAttribute("content")) {
    case "EUR":
      priceCurrencySymbol = "€";
      break;
    case "USD":
      priceCurrencySymbol = "$";
      break;
  }
}

function readName() {
  if (product.contains("Kg.")) {
    modifiedProductsCart.push(product);
  }
}

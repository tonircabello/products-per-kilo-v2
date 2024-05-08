class kilogramsCheck {
  constructor() {
    this.cart = document.querySelector(
      '[class*="cart-body mx-5 overflow-y-scroll max-h-full flex-1 scrolling-touch flex flex-col items-center content-center justify-center"]'
    );
    this.product = document.getElementsByClassName("ml-3");
    this.productName = document.getElementsByClassName(
      "font-body text-sm text-secondary"
    )[0].textContent;
    this.originalPrice = parseInt(
      document.getElementsByClassName("text-secondary text-base font-body")[0]
        .textContent
    );
    this.finalPrice = 0;
    this.modifiedProducts = [];
    this.setupEventListeners();
  }

  includesKg() {
    if (this.productName.includes("Kg.")) {
      this.extractPricePerKilo();
    }
  }

  extractPricePerKilo() {
    let weightInput = prompt("Introduce los kilogramos que deseas comprar:");
    if (weightInput && !isNaN(weightInput)) {
      this.finalPrice = this.originalPrice * parseFloat(weightInput);
      this.modifiedProducts.push(`${this.productName} - ${this.finalPrice}`);
      this.addNewProduct();
    } else {
      alert("Por favor, introduce una cantidad válida.");
    }
  }

  setupEventListeners() {
    document.querySelectorAll(".product").forEach((product) => {
      product.querySelector("button").addEventListener("click", () => {
        this.includesKg();
      });
    });
  }

  addNewProduct() {
    this.cart[0].appendChild(
      document.createTextNode(`${this.productName} - ${this.finalPrice}`)
    );
  }
}

new kilogramsCheck();

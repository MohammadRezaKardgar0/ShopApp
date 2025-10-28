class Cart {
  constructor(parent, price, cart) {
    this.parent = parent;
    this.price = price;
    this.cart = cart;
    this.products = [];
    this.toShow = [];
  }

  showProducts() {
    this.toShow = [...new Set(this.products)];
    this.parent.innerHTML = "";
    this.toShow.forEach((product) => {
      const qty = this.products.filter((p) => p.id === product.id).length;
      this.createCard(product, qty);
    });
  }

  createCard(data, qty) {
    const cardEle = document.createElement("div");
    const imgEle = this.productImage(data);
    const infoEle = this.productInfo(data);
    const controlEle = this.productControl(data, qty);

    cardEle.innerHTML = imgEle;
    cardEle.innerHTML += infoEle;
    cardEle.innerHTML += controlEle;

    this.parent.appendChild(cardEle);
  }

  productImage(data) {
    const { image, alt } = data;
    const imgJsx = `<img src=${image} alt=${alt}/>`;
    return imgJsx;
  }

  productInfo(data) {
    const { name, price } = data;
    const infoJsx = `
    <div>
    <h4>${name}</h4>
    <p>${price}</p>
    </div>`;
    return infoJsx;
  }

  productControl(data, qty) {
    const { id } = data;
    const controlJsx = `
<div>
    <div>
    <button data-id=${id}>-</button>
    <span>${qty}</span>
    <button data-id=${id}>+</button>
    </div>
    <button data-id=${id}>Remove</button>
</div>`;
    return controlJsx;
  }
}

export default Cart;

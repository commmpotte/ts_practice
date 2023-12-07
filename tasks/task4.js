"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class DeliveryPoint extends Delivery {
    constructor(idShop) {
        super(new Date());
        this.idShop = idShop;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (this.products.length === 0) {
            throw new Error('No products in a cart');
        }
        if (!this.delivery) {
            throw new Error('No setted delivery');
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, 'cookies', 4));
cart.addProduct(new Product(2, 'water', 1));
cart.addProduct(new Product(3, 'eggs', 9));
cart.addProduct(new Product(4, 'oat', 11));
cart.deleteProduct(3);
// cart.setDelivery(new HomeDelivery(new Date(), 'Attaba, Cairo, Egypt'))
console.log(cart.getSum());
console.log(cart);
console.log(cart.checkout());

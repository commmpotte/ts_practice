class Product {
  constructor(public id: number, public title: string, public price: number) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date)
  }
}

class DeliveryPoint extends Delivery {
  constructor(public idShop: number) {
    super(new Date())
  }
}

type DeliveryOptions = HomeDelivery | DeliveryPoint

class Cart {
  private products: Product[] = []
  private delivery: DeliveryOptions

  public addProduct(product: Product): void {
    this.products.push(product)
  }
  public deleteProduct(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id !== productId)
  }
  public getSum(): number {
    return this.products
      .map((p: Product) => p.price)
      .reduce((p1: number, p2: number) => p1 + p2)
  }
  public setDelivery(delivery: DeliveryOptions) {
    this.delivery = delivery
  }
  public checkout() {
    if (this.products.length === 0) {
      throw new Error('No products in a cart')
    }
    if (!this.delivery) {
      throw new Error('No setted delivery')
    }
    return { success: true }
  }
}

const cart = new Cart()
cart.addProduct(new Product(1, 'cookies', 4))
cart.addProduct(new Product(2, 'water', 1))
cart.addProduct(new Product(3, 'eggs', 9))
cart.addProduct(new Product(4, 'oat', 11))
cart.deleteProduct(3)
cart.setDelivery(new HomeDelivery(new Date(), 'Attaba, Cairo, Egypt'))
console.log(cart.getSum())
console.log(cart)
console.log(cart.checkout())

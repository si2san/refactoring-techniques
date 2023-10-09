type Item = {
  price: number;
};

class Order {
  private quantity: number;

  private item: Item;

  constructor(quantity: number, item: Item) {
    this.quantity = quantity;
    this.item = item;
  }

  public getPrice(): number {
    let basePrice = this.quantity * this.item.price;
    let discountFactor: number = 0.98;

    if (basePrice > 1000) {
      discountFactor -= 0.03;
    }

    return basePrice * discountFactor;
  }
}

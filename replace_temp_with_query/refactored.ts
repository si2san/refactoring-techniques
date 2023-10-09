type Item1 = {
  price: number;
};

class Order1 {
  private quantity: number;

  private item: Item1;

  constructor(quantity: number, item: Item1) {
    this.quantity = quantity;
    this.item = item;
  }

  public getPrice(): number {
    return this.getBasePrice() * this.getDiscountFactor();
  }

  private getBasePrice(): number {
    return this.quantity * this.item.price;
  }

  private getDiscountFactor(): number {
    let discountFactor = 0.98;

    if (this.getBasePrice() > 1000) {
      discountFactor -= 0.03;
    }

    return discountFactor;
  }
}

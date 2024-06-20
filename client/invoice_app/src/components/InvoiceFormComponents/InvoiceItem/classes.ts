export class Item {
  name: string;
  price: number;
  quantity: number;
  total: number;

  constructor() {
    this.name = "";
    this.price = 0;
    this.quantity = 0;
    this.total = this.price * this.quantity;
  }
}

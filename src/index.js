import Item from "../classes/Item.js"
import Order from "../classes/Order.js";
const order = new Order();
order.addItem(new Item("Beer", "Brahma", 6));
order.addItem(new Item("Beer", "Brahma", 4));
console.log(order.getTotal())
console.log(order.getTaxes())

import Eletronics from "../classes/categories/Eletronics.js";
import Beer from "../classes/categories/Beer.js";
import Cigar from "../classes/categories/Cigar.js";
import Water from "../classes/categories/Water.js";

import Order from "../classes/Order.js";

test("Deve criar um pedido e calcular o total", () => {
  const order = new Order();
  order.addItem(new Beer("Beer", "Brahma", 6));
  order.addItem(new Cigar("Cigar", "Malboro", 10));
  order.addItem(new Eletronics("Eletronics", "IPhone 13", 13000));
  order.addItem(new Water("Water", "Crystal", 1));
  const total = order.getTotal();
  expect(total).toBe(13017);
});

test("Deve criar um pedido e calcular os impostos", () => {
  const order = new Order();
  order.addItem(new Beer("Beer", "Brahma", 6));
  order.addItem(new Cigar("Cigar", "Malboro", 10));
  order.addItem(new Eletronics("Eletronics", "IPhone 13", 13000));
  order.addItem(new Water("Water", "Crystal", 1));
  const taxes = order.getTaxes();
  expect(taxes).toBe(3903.7);
});

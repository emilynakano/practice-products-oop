import Item from "./Item";

export default class TaxItem extends Item {
    constructor(category, mark, price) {
        super(category, mark, price)
    }

    calculateTax(tax) {
        const charge = this.price * tax;
        return charge;
    }
}
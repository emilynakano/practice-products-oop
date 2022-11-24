import Item from "./Item.js";

export default class TaxItem extends Item {
    constructor(category, mark, price) {
        super(category, mark, price)

        if (this.constructor == TaxItem) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    } 

    calculateTax(tax) {
        const charge = this.price * tax;
        return charge;
    }
}
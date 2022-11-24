import TaxItem from "./TaxItem.js";

export default class Order {
    constructor() {
        this.items = []
    }
    addItem(item) {
        this.items.push(item)
    }
    getTotal() {
        return this.items.reduce((sum, { price }) => sum + price, 0);
    }
    getTaxes() {
        return this.items.reduce((sum, item) => {
            if(item instanceof TaxItem) sum += item.calculateTax()
            return sum
        }, 0);
    }
}
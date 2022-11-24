import TaxItem from "./TaxItem.js";

export default class Order {
    constructor() {
        this.items = []
    }
    addItem(item) {
        this.items.push(item)
    }
    getTotal() {
        return this.items.reduce((partialSum, { price }) => partialSum + price, 0);
    }
    getTaxes() {
        let taxesSum = 0;
        this.items.map((item) => {
            if(item instanceof TaxItem) {
                const tax = item.getTaxes();
                taxesSum += item.calculateTax(tax)
            }
        });
        return taxesSum;
    }
}
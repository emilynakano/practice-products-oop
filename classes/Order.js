export default class Order {
    constructor() {
        this.total = 0
        this.taxe = 0.30
    }
    addItem(item) {
        this.total += item.price
    }
    getTotal() {
        return this.total
    }
    getTaxes() {
        return this.getTotal() * this.taxe;
    }
}
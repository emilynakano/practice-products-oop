export default class Order {
    constructor() {
        this.total = 0
    }
    addItem(item) {
        this.total += item.price
    }
    getTotal() {
        return this.total
    }
}
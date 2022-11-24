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
        const taxes = {
            'Beer': 0.20,
            'Cigar': 0.25,
            'Eletronics': 0.30,
            'Water': 0
        }
        return this.items.reduce((partialSum, { price, category }) => partialSum + (price * taxes[category]), 0);
    }
}
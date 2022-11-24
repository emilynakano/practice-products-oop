import TaxItem from "../TaxItem.js"

export default class Beer extends TaxItem {
    constructor(category, mark, price) {
        super(category, mark, price)
    }
   // override // metamorfism
    getTaxes() {
        return 0.20
    }
}
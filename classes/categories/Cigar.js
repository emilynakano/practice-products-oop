import TaxItem from "../TaxItem"

export default class Beer extends TaxItem {
    constructor(category, mark, price) {
        super(category, mark, price)
    }
    getTaxes() {
        return 0.25
    }
}
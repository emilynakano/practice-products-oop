export default class Item {
    constructor(category, mark, price) {
        this.category = category
        this.mark = mark
        this.price = price

        if (this.constructor == Item) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
}
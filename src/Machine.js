const Item = require('./Item');

module.exports = class Machine {
    constructor() {
        this.totalDeposit = 0;
        this.inventory = [];
        const crisps = new Item('crisps', 100, 1);
        const choc = new Item('chocolate', 350, 2);
        const mints = new Item('mints', 70, 3);
        this.stockInventory(crisps, 3);
        this.stockInventory(choc, 0);
        this.stockInventory(mints, 4);
    }

    stockInventory(item, quantity) {
        this.inventory.push({item: item, quantity: quantity});
    }

    seeSelections() {
        return this.inventory.map((inventoryItem => {
            return {[inventoryItem.item.name]: inventoryItem.item.price};
        }))
    }

    deposit(denomination) {
        this.totalDeposit += denomination;
        return 'You have deposited Rs ' + this.totalDeposit;
    }

    select(code) {
        const selectedItem = this.inventory.filter((item) => {
            return item.item.code === code;
        }).pop();
        if (selectedItem.quantity < 1) {
            return 'The item you selected is unavailable';
        }

    }
};
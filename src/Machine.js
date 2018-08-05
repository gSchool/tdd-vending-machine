module.exports = class Machine {
    constructor() {
        this.inventory = [
            {'crisps': 100},
            {'chocolate': 350},
            {'mints': 70}
        ];

    }


    seeSelections() {
        return this.inventory;
    }

    deposit(denomination) {
        return 'You have deposited Rs ' + denomination;
    }
};
module.exports = class Machine {
    constructor() {
        this.totalDeposit = 0;
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
        this.totalDeposit += denomination;
        return 'You have deposited Rs ' + this.totalDeposit;
    }
};
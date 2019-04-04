class Machine {
    constructor() {
        this.total = 0;
        this.acceptedBills = [10, 20, 50, 100, 500];
    }

    seeSelections() {
        return [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
    }

    deposit(amount) {
        this.total += amount;
        return `You have deposited: ${this.total}`
    }
};

module.exports = Machine;

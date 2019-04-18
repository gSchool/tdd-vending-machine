
module.exports = class Machine {
    constructor(items = [], totalDeposit = 0) {
        this.items = items
        this.totalDeposit = totalDeposit
    }

    seeSelections() {
        this.items.push({'crisps': 100})
        this.items.push({'chocolate': 350})
        this.items.push({'mints': 70})
        return this.items
    }

    deposit(denomination) {
        //The machine should accept bills in these amounts: 10, 20, 50, 100, 500

        if(denomination === 10 || denomination === 20 ||denomination === 50 || denomination === 100 || denomination === 500) {
            this.totalDeposit += denomination
            return `You have deposited Rs ${this.totalDeposit}`
        }
        else {
            return 'You bill can\'t be accepted'
        }
    }

    selectItem(code) {
        
    }


};


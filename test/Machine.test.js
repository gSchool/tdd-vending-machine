const Machine = require('../src/Machine');
const expect = require('chai').expect;

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];

        // exercise
        const actual = machine.seeSelections();

        // assert
        expect(actual).to.deep.equal(expected);
    });

    it('should display Rs deposited', () => {
        // setup
        const machine = new Machine();
        const expected = 'You have deposited Rs 100';

        // exercise
        const actual = machine.deposit(100);

        // assert
        expect(actual).to.deep.equal(expected);
    });

    it('should display additional Rs deposited', () => {
        // setup
        const machine = new Machine();
        const expected = 'You have deposited Rs 150';
        machine.totalDeposit = 100;

        // exercise
        const actual = machine.deposit(50);

        // assert
        expect(actual).to.deep.equal(expected);
    });

    it('should give msg when choice unavailable', () => {
        // setup
        const machine = new Machine();
        const expected = 'The item you selected is unavailable';
        machine.totalDeposit = 100;

        // exercise
        const actual = machine.select(2);

        // assert
        expect(actual).to.deep.equal(expected);
    });
});

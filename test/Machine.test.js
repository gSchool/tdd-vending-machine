const Machine = require('../src/Machine');

describe('the vending machine', () => {
    let machine

    beforeEach(() => {
        machine = new Machine();
    });

    test('should have items to purchase', () => {
        // setup
        const expected = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];

        // exercise
        const actual = machine.seeSelections();

        // assert
        expect(actual).toEqual(expected);
    });

    test('should see the deposite amount on a screen', () => {
        // setup
        const expected = 'You have deposited Rs 50'

        // exercise
        const actual = machine.deposit(50);

        // assert
        expect(actual).toEqual(expected);
    });

    test('should see the total deposit after adding additional money', () => {
        // setup
        machine.deposit(50);
        const expected = 'You have deposited Rs 150'

        // exercise
        const actual = machine.deposit(100);

        // assert
        expect(actual).toEqual(expected);
    });


});

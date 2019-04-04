const Machine = require('../src/Machine');
/**
 * Vending Machine Tests
 *
 * Each test requires 3 steps:
 *
 * 1 - Setup test case: Create any objects and variables to test against.
 * 2 - Define expectations: Create the exact success result you expect
 * 3 - Test results: Compare your expectations to results from the cases
 *
 *
 */

describe('the vending machine', () => {
    test('should have items to purchase', () => {
        // 1: setup test case data
        const machine = new Machine();

        // 2: define expectations
        const expected = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];

        // 3: test
        expect(machine.seeSelections()).toEqual(expected);
    });

    test('should display amount deposited', () => {
        const machine = new Machine();

        machine.deposit(100);
        expect(machine.total).toEqual(100);
        machine.deposit(50);
        expect(machine.total).toEqual(150);

        const expected = `You have deposited ${machine.total}`;
        expect(machine.deposit(1)).toEqual(expected);

    });

    test('should accept only 10, 20, 50, 100, 500 bills', () => {
        const machine = new Machine();

        const expected = { message: 'Insert 10, 20, 50, 100, 500 bills only.', change: 1 };

        expect(machine.deposit(1)).toEqual(expected);
    });

    test('should display a message for unavailable items', () => {
        const machine = new Machine();

        const actual = machine.selectItem('gummies');
        const expected = 'The item you selected is unavailable.';

        expect(actual).toEqual(expected);
    });

    test('should warn on insufficient deposit', () => {
        const machine = new Machine();

        machine.deposit(50);
        const expected = `Insufficient deposit. Add 20 for this item.`;

        expect(machine.selectItem('mints')).toEqual(expected);
    });

    test('should return change', () => {
        const machine = new Machine();

        machine.deposit(100);
        const actual = machine.selectItem('mints');
        const expected = {item: 'mints', change: [20, 10]};

        expect(actual).toEqual(expected);
    });

    test('should return money on cancel', () => {
        const machine = new Machine();

        machine.deposit(100);
        const actual = machine.cancel();
        const expected = {change: [100]};

        expect(actual).toEqual(expected);
    });
});

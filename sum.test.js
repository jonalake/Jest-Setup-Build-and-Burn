const sum = require('./index');

test('adds two integers', () => {
    expect(sum(4, 5)).toBe(9);
});
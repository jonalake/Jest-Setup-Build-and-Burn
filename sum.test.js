const sum = require('./index');

test('adds two integers', () => {
    expect(sum(1, 2)).toBe(3);
});
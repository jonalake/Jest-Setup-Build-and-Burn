const sum = require('./index')

test("add 2 integers", () => {
    expect(sum(1, 2)).toBe(3)
})
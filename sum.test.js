const { test, expect } = require('@jest/globals')
const sum = require('./index')

test('adds two integers', () => {
    expect(sum(6, 5)).toBe(11)
})
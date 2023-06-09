const reverseString = require('./reverse-string.js');

test('reverseString exists', () => {
    expect(reverseString).toBeDefined();
});

test('reverseString', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverseString with uppercase', () => {
    expect(reverseString('World')).toBe('dlroW');
});


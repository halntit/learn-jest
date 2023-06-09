const isAnagram = require('./anagram');

test('isAnagram exists', () => {
    expect(isAnagram).toBeDefined();
});

test('isAnagram', () => {
    expect(isAnagram('elbow', 'below')).toBe(true);
})

test('isAnagram', () => {
    expect(isAnagram('dormitory', 'dirty room')).toBe(true);
});

test('isAnagram', () => {
    expect(isAnagram('cinema', 'dogman')).toBeFalsy();
});
const trunkArray = require('./chunk-array');

test('chunkArray exists', () => {
    expect(trunkArray).toBeDefined();
});

test('chunkArray', () => {
    expect(trunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

test('chunkArray', () => {
    expect(trunkArray([1, 2, 3, 4, 5], 3)).toEqual([
        [1, 2, 3],
        [4, 5],
    ]);
});

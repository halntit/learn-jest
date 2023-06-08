const functions = require('./functions.js');
//import functions from './functions.js';

test('adds 1 + 2 to equal 3', () => {
    expect(functions.add(1, 2)).toBe(3);
});

test('adds 1 + 2 to not equal 4', () => {
    expect(functions.add(1, 2)).not.toBe(4);
});

test('isNull returns false', () => {
    expect(functions.isNull(null)).toBe(true);
});

test('isNull returns false', () => {
    const a = 10;
    expect(functions.isNull(a)).not.toBe(true);
});

test('checkValue should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('checkValue should not be falsy', () => {
    const a = 'a';
    expect(functions.checkValue(a)).not.toBeFalsy();
});

test('createUser should be truthy', () => {
    expect(functions.createUser('a', 1)).toBeTruthy();
});

test('createUser should be an user object', () => {
    expect(functions.createUser('a', 1)).toEqual({ name: 'a', age: 1 });
});

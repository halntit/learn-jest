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

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('Admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

test('fetchUser should be returned a user', () => {
    functions.fetchUser(1).then(user => {
        expect(user).toBeDefined();
        expect(user.id).toBe(1);
        expect(user.name).toBe('Leanne Graham');
    });
})

test('fetchUser should be returned a user (using async)', async () => {
    const user = await functions.fetchUser(2);
    expect(user).toBeDefined();
    expect(user.id).toBe(2);
    expect(user.name).toBe('Ervin Howell');
});

test('fetchUser should be returned an error', async () => {
    const error = await functions.fetchUser(11);
    expect(error).toBeDefined();
    expect(error.response.status).toBe(404);
    expect(error.message).toBe('Request failed with status code 404');
})
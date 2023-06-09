const axios = require('axios');

const functions = {
    add: (a, b) => a + b,
    // subtract: (a, b) => a - b,
    // multiply: (a, b) => a * b,
    // divide: (a, b) => a / b,
    isNull: (a) => a === null,
    // isUndefined: (a) => a === undefined,
    checkValue: (a) => a,
    createUser: (name, age) => {
        const user = { name: name, age: age };
        return user;
    },
    fetchUser: (id) =>
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.data)
            .catch(error => error)
};

module.exports = functions;
//export default functions;
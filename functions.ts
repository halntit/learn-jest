import axios from 'axios';

interface User {
    name: string;
    age: number;
}

interface Functions {
    add: (a: number, b: number) => number;
    isNull: (a: any) => boolean;
    checkValue: <T>(a: T) => T;
    createUser: (name: string, age: number) => User;
    fetchUser: (id: number) => Promise<any>;
}

const functions: Functions = {
    add: (a, b) => a + b,
    isNull: (a) => a === null,
    checkValue: (a) => a,
    createUser: (name, age) => {
        const user = { name: name, age: age };
        return user;
    },
    fetchUser: (id) =>
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.data)
            .catch((error) => error),
};

export default functions;

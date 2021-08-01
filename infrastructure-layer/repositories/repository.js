// repository.js

module.exports = (db) => {
    const findUserById = (id) => {
        // db query your user by id
    }

    const createUser = (data) => {
        // db insert a new user
    }

    // ... other repository functions to deal with the database

    return Object.create({
        findUserById,
        createUser,
        // ...
    })
}
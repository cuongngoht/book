const {
    Sequelize
} = require('sequelize');

const Context = new Sequelize('admin', 'postgres', 'mysecretpassword', {
    host: '127.0.0.1',
    dialect: 'postgres'
});


module.exports = {
    Context
};
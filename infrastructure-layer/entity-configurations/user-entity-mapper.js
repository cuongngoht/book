const {
    DataTypes
} = require('sequelize');
var User = require('../../domain-layer/models/user');
var Users = context => User.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
    sequelize: context, // We need to pass the connection instance
    modelName: 'users' // We need to choose the model name
});
module.exports = Users;
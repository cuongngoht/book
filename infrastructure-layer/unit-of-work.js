
let {
    Context
} = require('./db-context');

let Users = require('./entity-configurations/user-entity-mapper')(Context);

var UsersRepository = require('./repositories/user-repository')(Users);
module.exports = {
    UsersRepository
};
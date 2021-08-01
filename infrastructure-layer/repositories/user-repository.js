// var context = require('../context');
let UsersRepository = (context) => {
    return ({
        findById: (id) => {
            return context.findOne({
                where: {
                    id: id
                }
            });
        }
    });
};


module.exports = UsersRepository;
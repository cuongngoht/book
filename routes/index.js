let express = require('express');
let router = express.Router();
const {
  Sequelize,
  DataTypes,
  Model
} = require('sequelize');
// var  from '../infrastructureLayer/repositories/userRepository'

var unitOfWork = require('../infrastructure-layer/unit-of-work');

const authencation = async function authencation() {
  try {
    var aa = await unitOfWork.UsersRepository.findById('f35c8fb2-101b-4e25-a000-3b752d4c8ebc');
    return aa;
    console.log(aa.values);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

router.get('/username', async (req, res, next) => {
  var cuong = await authencation();

  res.send({
    error: true,
    message: `helle ${cuong.name}`
  })
});
/* GET home page. */
router.get('/', async (req, res, next) => {
  var cuong = await authencation();
  res.render('index', {
    title: `Express ${cuong.name}`
  });
});

module.exports = router;
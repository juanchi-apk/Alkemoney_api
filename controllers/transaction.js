const bcrypt = require('bcrypt');
const {validationResult } = require('express-validator')
const sequelize = require('../database/index');
const {Users} =sequelize;
const env = require('dotenv');


exports.newtransaction = async (req, res) => {
      console.log(req)
    res.sendStatus(200)

}
exports.changetransaction = async (req, res) =>{
   // console.log(req.headers)
    res.sendStatus(200)

}   
exports.gettransaction = async (req, res) =>{
  //  console.log(req.headers)
    res.sendStatus(200)

}
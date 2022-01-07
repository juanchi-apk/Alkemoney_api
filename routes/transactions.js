


/* 


        id_transaction
        amount
        details
        receipts_numbers
        date
        type
       	user_id
        cat_id

        
       */

const server = require('express').Router();
//const transactionValidator = require('../middleware/validators/transation_validators');
const transactionControllers = require('../controllers/transaction');
const  authUser = require('../middleware/auth/authUsers')

console.log(authUser)

server.get('/get' , authUser, transactionControllers.gettransaction )
server.put('/new', transactionControllers.newtransaction )
server.post('/change', transactionControllers.changetransaction )


module.exports = server;


const express = require('express');
const server = express.Router();


const authRouter = require('./auth')
const categoryRouter = require('./categories');
const transactionRouter = require('./transactions')
const userRouter = require('./users');


server.get('/', (req , res)=>{
    res.send("hola mundo")
});
 
server.use('/auth', authRouter)
server.use("/categories", categoryRouter)
server.use("/transactions", transactionRouter)
server.use("/user", userRouter)


module.exports = server;
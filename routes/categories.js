const server = require('express').Router();
const sequelize = require('../database/index');
const {Categories} =sequelize




server.get('/', async function (req,res){

    await Categories.findAll()
    .then(function (categories) {
        console.log(Categories)
        res.json({
            data: {
               categories,
            }
        })
    })
    .catch(function (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se puedo acceder a las categorias',
            data: error
        })
    })

    })



server.post('/add', async function(req , res){
    
  
    const {catname} = req.body
   
    await Categories.create({

    
		cat_name: catname,
		
    })
    .then(function (user) {
        console.log(user)
        res.json({
            message: 'La Categoria se creo correctamente',
            data: { 
                user: user,
                logging:"true",
            }
        })
    })
    .catch(function (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear la categoria',
            data: error
        })
    })

    
});

module.exports = server;
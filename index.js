const path = require('path');
const env = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const {sequelize}	 = require('./database/index');
const routes = require("./routes/index");
const cors = require("cors");
const morgan = require("morgan")



//Inicio la sesion de Express
const app = express();
const corsOptions = {
	origin: "http://localhost:3000",
	};

	env.config();



app.use(bodyParser.json());
app.use(cors(corsOptions)); 
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", routes);


sequelize
	//.sync({force : true})
	.sync({force:true} )
	.then(() => {
		app.listen(process.env.PORT);
		//pending set timezone
		console.log("App listening on port " + process.env.PORT);
	})
	.catch(err => {
		console.log(err);
	});

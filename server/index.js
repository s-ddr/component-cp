const express = require('express');
const path = require('path');
const app = express();
const parser = require('body-parser');
const connection = require('../database');
const db = require('../database/dbHelpers');
const port = process.env.PORT || 3002;
const morgan = require('morgan');
const cors = require('cors')

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/products-cp/', cors(), (req, res) => { // grab list of chairs
	db.getChairs()
		.then((records) => {
			res.status(200).send(JSON.stringify(records)); 
		})
		.catch( (err) => {
			console.error(err);
			res.status(404).send('Error retrieving data.');
		});
})


app.get('/products-id/:id', cors(),(req, res) => { // grab chair by ID 17sec
	var { id } = req.params;
	db.getChairByCollectionID(id)
		.then((data) => {
			res.status(200).send(data);
		})
		.catch( (err) => {
		console.error(err);
		res.status(404).send('Error retrieving data.');
	});
})

app.get('/products-raw/:id', cors(), (req, res) => { // grab chair by ID 5ms
	var { id } = req.params;
	db.getChairByRawId(id)
		.then((data) => {
			res.status(200).send(data[0]);
		})
		.catch((err) => {
			console.error(err);
			res.status(404).send('Error retrieving data.');
		});
})

app.get('/products-idraw/:id', cors(), (req, res) => { // grab chair by ID 5ms
	var { id } = req.params;
	db.getChairByIdRaw(id)
		.then((data) => {
			res.status(200).send(data[0]);
		})
		.catch((err) => {
			console.error(err);
			res.status(404).send('Error retrieving data.');
		});
})


//todo create rest of crud methods

app.listen(port, () => console.log(`Listening to port ${port}`))
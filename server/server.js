/**
 * Created by root on 31/07/17.
 */
var { mongoose} = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use( bodyParser.json())

app.post('/todos', (request, response) => {
	var todo = new Todo({
		text: request.body.text
	});
	
	todo.save(). then(
		doc => { response.send( doc); },
		error => { response.status(400).send(error); }
		
	);
	
});

app.listen( 3000 , () => {
	console.log( 'Started at port 3000');
});

module.exports = {
	app: app
}
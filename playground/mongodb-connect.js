/**
 * Created by root on 12/07/17.
 */
//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

/* Deconstruct Objects
	var   test = require('assert');
	var user = { name: 'Neoa', age:25};
	var {name}= user;
	console.log(name);
*/

MongoClient.connect("mongodb://localhost:27017/TodoApp",(error, db) => {
	if( error ){
		console.log('Unable to connect to database');
	}
	console.log('Connected to MongoDB server');

	/*
	db.collection("Todos").find({ _id: new ObjectID("5966a3a89bb58670b8bc11fc") }).toArray()
		.then( result => {
			console.log( JSON.stringify( result, undefined, 2));
		}, (error) => {
			console.log('Unable to fetch all the task.' + error);
		});
	
	db.collection("Todos").find().count()
		.then( count => {
			console.log(`Todos count: ${ count }` );
		}, (error) => {
			console.log('Unable to fetch all the task.' + error);
		});

	
    db.collection("Todos").insertMany([
			{ text:'Go to the super', completed:true },
			{ text:'Make Chimichangas',completed:false },
			{ text:'Make a lot churros', completed: false},
			{ text: 'Go to for the cheves', completed: false}
		]).then( response => {
		console.log(`Total inserted: ${ response.insertedCount}`);
	});
	 */
	
	/* Counting the result of a query
	db.collection("Todos").find({ completed: true}).count().then( response => { console.log(`All Done: ${ response }` ); });
	*/
	
	//Deleting Many Elements
	db.collection("Todos").deleteMany();
	
	
	db.close();
});


/*
MongoClient.connect('mongodb://localhost:27017/test', (error, db) => {
	var collection = db.collection('insert_one');
	collection.insertOne({ a:1 }, (error, result) => {
		test.equal(null, error);
		test.equal(1 , result.insertedCount);
		
		db.close();
	});
});

MongoClient.connect('mongodb://localhost:27017/test', (error, db) => {
	var col = db.collection('insert_one_with_promise');
	col.insertOne( { a : 1 } ).then( result => {
		test.equal( 1, result. insertedCount);
		db.close();
	})
});


MongoClient.connect('mongodb://localhost:27017/test', (error, db) => {
	var col = db.collection('insert_many_with_primises');
	col.insertMany( [{ a : 1}, { b: 2 }])
		.then( result => {
			console.log( 2, result.insertedCount);
			db.close();
		});
});
 
 
 */

/**
 * Created by root on 31/07/17.
 */

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(error, db) => {
	if( error ){
		console.log('Unable to connect to database');
	}
	console.log('Connected to MongoDB server');

	
	/*DeletMany
		db.collection("Todos")
			.deleteMany({ text: 'Make dinner'})
			. then( (result) =>{
				console.log( result )
		});
	
	
	//DeteleOne
		db.collection('Todos')
			.deleteOne({ text:'Walk the dog'})
			.then( response => console.log( response ));
	 */
	//FindOneAndDelete
		db.collection('Todos')
			.findOneAndDelete( { completed: true })
			.then( response => console.log( response ));
	
	//db.close();
});



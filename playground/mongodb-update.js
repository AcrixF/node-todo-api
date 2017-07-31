/**
 * Created by root on 31/07/17.
 */

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(error, db) => {
	if( error ){
		console.log('Unable to connect to database');
	}
	console.log('Connected to MongoDB server');

	/*
	db.collection('Todos').findOneAndUpdate(
		{
			_id: new ObjectID('597f739d83baa4325ad313e8')
		},
		{
			$set: {
				completed:true
			}
		},
		{
			returnOriginal: false
		}
	).then( result => console.log( result ));
	*/
	
	
	
	db.collection('Users').findOneAndUpdate(
		{ location: 'Some Address'},
		{ $inc: {
				age:1
			}
		},
		{
			returnOriginal: true
		}
	).then( response => console.log( response ));
	
	//db.close();
});



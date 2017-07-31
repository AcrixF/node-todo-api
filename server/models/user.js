/**
 * Created by root on 31/07/17.
 */
var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email:{
		type: String,
		required: true,
		trim:true,
		minlength:8
	}
});

module.exports = {
	User
}
/**
 * Created by root on 31/07/17.
 */
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {
	mongoose
}

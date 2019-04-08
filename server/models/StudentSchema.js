var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    studentID: Number,
    studentName: String,
});

//Export model
module.exports = mongoose.model('student', StudentSchema);
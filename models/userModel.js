let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    'name': String,
    'age': String,
    'location': String,
    'Phone': Number,
    'email': String
});

module.exports = mongoose.model('user', userSchema);
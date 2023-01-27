var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    UserId: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    PunchIn: {
        type: String,
        required: true
    },
    PunchOut: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('employees', userSchema);
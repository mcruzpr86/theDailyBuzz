var mongoose = require('mongoose')
var Schema = mongoose.Schema
var NoteSchema = new Schema({
    note: {
        type: String,
        required: true,
    }
});

var note = mongoose.model('note', NoteSchema)

module.exports = note;
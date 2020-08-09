var mongoose = require('mongoose')
var Schema = mongoose.Schema
var commentSchema = new Schema({
    comment: {
        type: String,
        required: true,
    }
})

const Comments = mongoose.model('Comments', commentSchema)

module.exports = Comments
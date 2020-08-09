var mongoose = require('mongoose')
var Schema = mongoose.Schema
var articlesSchema = new Schema({

    headline: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true,
        unique: true
    },
    URL: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
    },
    commentsID: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comments"
        }
    ]
})

var Articles = mongoose.model('Articles', articlesSchema)

module.exports = Articles
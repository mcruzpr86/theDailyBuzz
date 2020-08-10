var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ArticlesSchema = new Schema({

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
    note: [
        {
            type: Schema.Types.ObjectId,
            ref: "note"
        }
    ]
})

var Articles = mongoose.model('Articles', ArticlesSchema);

module.exports = Articles;
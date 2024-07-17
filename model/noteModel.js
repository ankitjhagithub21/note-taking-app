const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const Note= mongoose.model('Note',noteSchema)

module.exports = Note
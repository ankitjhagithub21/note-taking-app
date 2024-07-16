const mongoose = require('mongoose')

const connectDb = () =>{
    mongoose.connect("mongodb://localhost:27017/note-taking-app").then(()=>{
        console.log("Database connected.")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDb
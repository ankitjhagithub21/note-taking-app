const express = require('express')
const { addNote, removeNote, updateNote, getAllNotes } = require('../controllers/noteController')
const noteRouter = express.Router()

noteRouter.post("/add",addNote)
noteRouter.get("/",getAllNotes)
noteRouter.delete("/remove/:id",removeNote)
noteRouter.put("/update/:id",updateNote)


module.exports = noteRouter
const express = require('express')
const { addNote, removeNote, updateNote, getAllNotes, getNoteById } = require('../controllers/noteController')
const noteRouter = express.Router()

noteRouter.post("/add",addNote)
noteRouter.get("/",getAllNotes)
noteRouter.delete("/:id",removeNote)
noteRouter.put("/:id",updateNote)
noteRouter.get("/:id",getNoteById)


module.exports = noteRouter
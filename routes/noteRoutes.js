const express = require('express')
const { addNote, removeNote, updateNote } = require('../controllers/noteController')
const noteRouter = express.Router()

noteRouter.post("/add",addNote)
noteRouter.delete("/remove/:id",removeNote)
noteRouter.put("/update/:id",updateNote)

module.exports = noteRouter
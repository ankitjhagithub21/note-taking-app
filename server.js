const express = require('express')
const connectDb = require('./conn')
const path = require('path')
const app = express()
const port = 3000

connectDb()

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname+"/public")))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
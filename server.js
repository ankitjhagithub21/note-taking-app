const express = require('express')
const connectDb = require('./conn')
const path = require('path')
const noteRouter = require('./routes/noteRoutes')
const app = express()
const port = 3000

connectDb()


app.set('view engine','ejs')
app.use(express.static(path.join(__dirname+"/public")))
app.use("/api/notes",noteRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
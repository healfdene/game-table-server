const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

const PORT=11671

app.post('/gamemap', upload.single('gamemap'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log("gamemap text:",req.file)
})

app.listen(PORT, function () {
  console.log('GameTable server listening on port',PORT)
})

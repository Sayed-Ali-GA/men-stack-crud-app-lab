const express = require('express')
const mongoose = require('mongoose')
const { type } = require('os')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, "public")))
  app.get('/', (req, res) => {
    res.render('index.ejs')
      
  })
app.listen(3002, () => {
    console.log('Listening on port 3002')
})

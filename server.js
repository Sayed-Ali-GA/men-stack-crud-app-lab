const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const mongoose = require('mongoose')
const { type } = require('os')
const path = require('path')
const app = express()
const port = 3002;
const methodOverride = require('method-override')
const morgan = require('morgan')
const carsController = require('./controller/carsController')


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use(morgan('dev'))
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Conected to MongoDB${mongoose.connection.name}`);
});

  app.get('/', (req, res) => {
    res.render('index.ejs')
  })
  
app.use('/carsCre', carsController)
app.listen(port), () => {
  console.log("SERVER IS WORKING");
}

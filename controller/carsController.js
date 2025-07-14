const express = require('express');
const carsCre = require('../models/cars');
const Cars = require('../models/cars');
const router = express.Router()


router.get(('/new'), (req,res) => {
    res.render('carsCre/new.ejs') 
})

router.post('/', async (req,res) => {
  if(req.body.isVerified === "on"){
    req.body.isVerified = true
  }else{
    req.body.isVerified = false;
  }
  console.log(req.body)
  await Cars.create(req.body)
  res.redirect('carsCre/new')
})




module.exports = router;
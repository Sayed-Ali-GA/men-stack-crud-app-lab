const express = require('express');
const carsCre = require('../models/cars');
const Cars = require('../models/cars');
const router = express.Router()

// last thing
router.get('/', async (req, res) =>{
    const allCarsCre = await Cars.find()
    console.log('allCarsCre', allCarsCre)
    res.render('carsCre/index.ejs', {allCarsCre: allCarsCre})
})

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

router.get('/:carsId',async (req, res) => {
  const foundCars = await Cars.findById(req.params.carsId)
  console.log('Found Car:', foundCars)
  res.render('carsCre/show.ejs', {foundCars: foundCars})
})


module.exports = router;
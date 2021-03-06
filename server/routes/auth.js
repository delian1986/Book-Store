const express = require('express')
const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')
const Order = require('../models/Order')


const router = new express.Router()

function validateSignupForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length < 3) {
    isFormValid = false
    errors.username = 'Username must be at least 3 characters long'
  }

  // if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
  //   isFormValid = false
  //   errors.email = 'Please provide a correct email address'
  // }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 3) {
    isFormValid = false
    errors.password = 'Password must be at least 3 characters long'
  }

  if (!payload || typeof payload.repeatPassword !== 'string' || payload.repeatPassword.trim() !== payload.password.trim()) {
    isFormValid = false
    errors.password = 'Passwords must match'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

function validateLoginForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
    isFormValid = false
    errors.email = 'Please provide your username.'
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false
    errors.password = 'Please provide your password.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/register', (req, res, next) => {
  const validationResult = validateSignupForm(req.body)
  if (!validationResult.success) {
    return res.status(401).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }


  return passport.authenticate('local-signup', (err) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: err
      })
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.'
    })
  })(req, res, next)
})

router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body)
  if (!validationResult.success) {
    return res.status(401).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  return passport.authenticate('local-login', (err, token, userData) => {
    // console.log(userData);
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(401).json({
          success: false,
          message: err.message
        })
      }

      return res.status(500).json({
        success: false,
        message: 'Could not process the form.'
      })
    }

    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    })
  })(req, res, next)
})

router.post('/checkout/:username', (req, res) => {
  const username = req.params.username;
  const books = req.body;
  // console.log(newOrder);

  let orderObj = {
    creator: username,
    books
  }

  Order
    .create(orderObj)
    .then((createdOrder) => {
      console.log(createdOrder);
      res.status(200).json(createdOrder);
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :('
      return res.status(400).json({
        success: false,
        message: message
      })
    })


})

router.get('/checkout/:username',(req,res)=>{
  const username = req.params.username;

  Order
    .find({creator: username})
    .then(orders => {
      res.status(200).json(orders)
    })
})

router.get('/checkout/order/:id',(req,res)=>{
  const orderId = req.params.id;

  Order
  .findById(orderId)
  .then(order => {
    console.log(order);
    res.status(200).json(order)
  }).catch((e)=>{
    res.status(404).json('Not Found!')

  })


})


module.exports = router

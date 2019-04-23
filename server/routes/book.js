const express = require('express')
const authCheck = require('../config/auth-check')
const User = require('../models/User')
const Book = require('../models/Book')

const router = new express.Router()

function validateCourseCreateForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.price = parseFloat(payload.price)

  if (!payload || typeof payload.title !== 'string' || payload.title.length < 3) {
    isFormValid = false
    errors.name = 'Course name must be at least 3 symbols.'
  }

  if (!payload || !payload.videoUrl || !payload.videoUrl.startsWith('http')) {
    isFormValid = false
    errors.image = 'VideoUrl is required and must be a valid url.'
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

router.post('/create', authCheck, (req, res) => {
  const bookObj = req.body
  Book
    .create(bookObj)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Book added successfully.',
      })
    })
    .catch((err) => {
      console.log(err)
      let message = 'Something went wrong :( Check the form for errors.'
      if (err.code === 11000) {
        message = 'Course with the given name already exists.'
      }
      return res.status(200).json({
        success: false,
        message: message
      })
    })
}

)

router.get('/last', (req, res) => {
  Book.find().sort({'added':-1}).limit(6)
    .then(lastBooks => {
      res.status(200).json(lastBooks);
    })
})

router.get('/all', (req, res) => {
  Book.find().sort({'added':-1})
    .then(books => {
      res.status(200).json(books);
    })
})








module.exports = router


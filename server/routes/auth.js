const router = require('express').Router();
const { body } = require('express-validator/check');
const authController = require('../controllers/auth');
const User = require('../models/User');

router.post('/register',
  [
    // TODO: Add normalize email and check
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject('E-Mail address already exists!');
          }
        })
      }),
    body('password')
      .trim()
      .isLength({ min: 3 })
      .withMessage('Please enter a valid password.'),
    body('repeatPassword')
      .trim()
      .withMessage('Passwords must match!')
      .custom((value,{req})=>{
          return value===req.body.password
      }),
    // body('email')
    //   .trim()
    //   .not()
    //   .isEmpty()
    //   .withMessage('Please enter a valid name.')
  ]
  , authController.register);
router.post('/login', authController.login);

module.exports = router;

const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn } = require('../middleware');

const {
  registerFormController,
  registerController,
  loginFormController,
  loginController,
  getAllUsers,
  makeAdmin,
  deleteUserController,
  logoutController,
} = require('../controllers/user');

router.get('/register', registerFormController);
router.post('/register', registerController);
router.get('/login', loginFormController);
router.post(
  '/login',
  passport.authenticate('local', {
    failureFlash: true,
    failureRedirect: '/login',
  }),
  loginController
);

router.get('/admin/users', isLoggedIn, getAllUsers);
router.get('/admin/makeAdmin/:id', isLoggedIn, makeAdmin);
router.delete('/admin/:id', isLoggedIn, deleteUserController);
router.get('/logout', isLoggedIn, logoutController);

module.exports = router;

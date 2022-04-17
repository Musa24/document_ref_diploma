const User = require('../models/user');

const registerFormController = (req, res, next) => {
  res.render('user/registerForm.ejs');
};

const registerController = async (req, res, next) => {
  const { username, password, email } = req.body;
  try {
    const user = new User({
      username,
      email,
    });
    const newUser = await User.register(user, password);
    if (newUser.isAdmin) {
      return res.redirect('/admin');
    }
    return res.redirect('/document');
  } catch (error) {
    res.redirect('/register');
  }
};

const loginFormController = (req, res, next) => {
  res.render('user/loginForm.ejs');
};

const loginController = async (req, res, next) => {
  if (req.user.isAdmin) {
    return res.redirect('/admin');
  }
  return res.redirect('/document');
};

const logoutController = (req, res, next) => {
  req.logout();
  res.redirect('/');
};

const getAllUsers = async (req, res, next) => {
  const users = await User.find({});
  let counter = 0;
  res.render('user/users.ejs', {
    users,
    counter,
  });
};

const makeAdmin = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);

  user.isAdmin = !user.isAdmin;
  await user.save();
  res.redirect('/admin/users');
};

const deleteUserController = async (req, res, next) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.redirect('/admin/users');
};

module.exports = {
  registerFormController,
  registerController,
  loginFormController,
  loginController,
  getAllUsers,
  makeAdmin,
  deleteUserController,
  logoutController,
};

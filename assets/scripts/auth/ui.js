'use strict';
// const store = require('../store.js');

const success = () => {
  console.log('success');
};

const signUpSuccess = () => {
  console.log("You've successfully created an account!");
  $("#sign-up").trigger("reset");
};

const signUpFailure = (data) => {
  console.log("Oops! Either, that email address already has an account or your passwords don't match. Try Again.");
  console.log(data);
  $("#sign-up").trigger("reset");
};

const failure = () => {
  console.log('Oops, try again.');
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpFailure,
  // signInSuccess,
  // signInFailure,
  // changePasswordSuccess,
  // changePasswordFailure,
  // signOutSuccess,
};

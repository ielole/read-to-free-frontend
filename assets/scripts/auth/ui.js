'use strict';
const store = require('../store.js');

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

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
  console.log("You've successfully signed in!");
  console.log(data);
  $(".signed-in").show();
  $(".signed-out").hide();
  // $("#sign-in").hide();
  $("#sign-in").trigger("reset");
  };

const signInFailure = () => {
  console.log("Oops, something went wrong. Try signing in again.");
  $("#sign-in").trigger("reset");
  };

const changePasswordSuccess = () => {
  console.log("Congrats! You've successfully changed your password.");
  $("#change-password").trigger("reset");
  // $("#change-password").hide();
};

const changePasswordFailure = () => {
  console.log("Oops, something went wrong. Try changing your password again.");
  $("#change-password").trigger("reset");
  // $("#change-password").hide();
};

const signOutSuccess = (data) => {
  success(data);
  console.log("You've successfully signed out!");
  // $("#sign-out").hide();
  $('.signed-in').hide();
  $('.signed-out').show();
  // $("#sign-in").show();
};


module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
};

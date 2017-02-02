'use strict';

const getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');


const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure);
};

const showSignUp = () => {
  $("#sign-up").toggle();
};

const onSignIn = function (event) {

  let data = getFormFields(this);
  // console.log('login this is ', this)
  // console.log('login data is ', data);
  event.preventDefault();
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure);
 };

const showSignIn = () => {
  $("#sign-in").toggle();
};

const onChangePassword = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure);
 };

const addAuthHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('.show-sign-up').on('click', showSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('.show-sign-in').on('click', showSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};



module.exports = {
  addAuthHandlers,
};

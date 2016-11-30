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

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  // $('#sign-in').on('submit', onSignIn);
  // $('#change-password').on('submit', onChangePassword);
  // $('#sign-out').on('submit', onSignOut);
};



module.exports = {
  addHandlers,
};

'use strict';

const getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const onAddBook = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.addBook(data)
    .then(ui.addBookSuccess)
    .catch(ui.addBookFailure);
};

const addBookHandlers = () => {
$('#add-a-book').on('submit', onAddBook);
};

module.exports = {
  addBookHandlers,
};

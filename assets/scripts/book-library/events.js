'use strict';

const getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const onAddBook = function(event) {
  let data = getFormFields(this);
  event.preventDefault();
  console.log(data);
  api.addBook(data)
    .then(ui.addBookSuccess)
    .catch(ui.addBookFailure);
};

const onGetBooks = function() {
  // console.log('bad mood');
  api.getIndex()
    .then(ui.success)
    .catch(ui.failure);
};

const addBookHandlers = () => {
$("#add-a-book").on('submit', onAddBook);
$("#get-books").on('click', onGetBooks);
};

module.exports = {
  addBookHandlers,
};

'use strict';

const getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const onAddBook = function(event) {
  let data = getFormFields(this);
  event.preventDefault();
  // console.log('this is ', this)
  // console.log('data is ', data);
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

const onGetReviews = function() {
  console.log('maine house');
  api.getReviews()
    .then(ui.getReviewsSuccess)
    .catch(ui.getReviewsFailure);
};

const addBookHandlers = () => {
$("#add-a-book").on('submit', onAddBook);
$("#get-books").on('click', onGetBooks);
$("#get-reviews").on('click', onGetReviews);
};

module.exports = {
  addBookHandlers,
};

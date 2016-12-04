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



const onDeleteReview = function(event) {
  // console.log('do you do what i think you do?');
  // let data = getFormFields(this);
  event.preventDefault();
  // console.log("event.target is", event.target);
  // console.log("event is ", event);
  let reviewId = event.target.getAttribute('data-id');
  api.deleteReview(reviewId)
    .then(ui.deleteReviewSuccess)
    .catch(ui.deleteReviewFailure);
};

const onGetOneReview = function(event) {
  console.log('Sunday sunday sunday!');
  event.preventDefault();
  let reviewId = event.target.getAttribute('data-id');
  api.getOneReview(reviewId)
    .then(ui.getOneReviewSuccess)
    .catch(ui.getOneReviewFailure);
};


const onGetReviews = function() {
  // console.log('maine house');
  api.getReviews()
    .then(ui.getReviewsSuccess)
    .then(function(){
      $('.delete-review').on('click', onDeleteReview);
      $('.update-review').on('click', onGetOneReview);
    })
    .catch(ui.getReviewsFailure);
};

const onAddReview = function(event) {
  // console.log('so tired');
  let data = getFormFields(this);
  event.preventDefault();
  api.addReview(data)
    .then(ui.addReviewSuccess)
    .catch(ui.addReviewFailure);
};

const onGetBooks = function() {
  // console.log('bad mood');
  api.getIndex()
    .then(ui.getBooksSuccess)
    .then(function(){
      $('.show-me-review-modal').on('click', onAddReview);
    })
    .catch(ui.failure);
};



const addBookHandlers = () => {
$("#add-a-book").on('submit', onAddBook);
$("#get-books").on('click', onGetBooks);
$("#get-reviews").on('click', onGetReviews);
$("#add-a-review").on('submit', onAddReview);
$("#one-review").on('click', onGetOneReview);
};

module.exports = {
  addBookHandlers,
};

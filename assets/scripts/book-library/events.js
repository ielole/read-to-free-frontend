'use strict';

const getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const onAddBook = function(event) {
  let formData = getFormFields(this);
  event.preventDefault();
  // console.log('this is ', this)
  // console.log('data is ', data);
  api.addBook(formData)
    .then(ui.addBookSuccess)
    .catch(ui.addBookFailure)
    // .then(console.log('this is after addbooksuccess', formData));
    .then(function(bookData) {
      formData.review.book_id = bookData.book.id;
      // console.log('this is bookData', bookData);
      // console.log('this is formData', formData);
      return api.addReview(formData);

      })
      .then(ui.addReviewSuccess)
      .catch(ui.addReviewFailure);
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
    .then(function() {
      onGetReviews();
    })
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

const onUpdateOneReview = function(event) {
  let reviewId = event.target.getAttribute('data-id');
  let data = getFormFields(this);
  event.preventDefault();
  console.log('I\'m so fancy!');
  console.log(reviewId, data);
  api.updateOneReview(reviewId, data)
    .then(ui.updateOneReviewSuccess)
    .then(function() {
      onGetReviews();
    })
    .catch(ui.updateOneReviewFailure);
};

const onhideBookshelf = function(event) {
  console.log('hide reviews');
  event.preventDefault();
  ui.hideBookshelf();
};

const onEditReview = function(event) {
  console.log('control update-form div display property');
  event.preventDefault();
  ui.updateForm();
};

const onGetReviews = function() {
  // console.log('maine house');
  api.getReviews()
    .then(ui.getReviewsSuccess)
    .then(function() {
      $('.delete-review').on('click', onDeleteReview);
      $('.update-review').on('click', onGetOneReview);
      $('.edit-review').on('click', onEditReview);
      $('.hide-reviews').on('click', onhideBookshelf);
      $('.update-a-review').on('submit', onUpdateOneReview);
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
      // $('.show-me-review-modal').on('click', onAddReview);
      $(".add-a-review").on('submit', onAddReview);
    })
    .catch(ui.failure);
};

const onhideLibrary = function(event) {
  console.log('hide books');
  event.preventDefault();
  ui.hideLibrary();
};

const onSearchBooks = function(event) {
  // console.log('Suja Rocks');
  let data = getFormFields(this);
  event.preventDefault();
  api.searchBooks(data)
    .then(ui.searchBooksSuccess)
    .catch(ui.searchBooksFailure);
};



const addBookHandlers = () => {
$("#add-a-book").on('submit', onAddBook);
$("#get-books").on('click', onGetBooks);
$("#get-reviews").on('click', onGetReviews);
$('#search-book-titles').on('submit', onSearchBooks);

$('.hide-books').on('click', onhideLibrary);
// $("#add-a-review").on('submit', onAddReview);
// $("#one-review").on('click', onGetOneReview);
};

module.exports = {
  addBookHandlers,
};

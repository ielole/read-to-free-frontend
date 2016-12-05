'use strict';

const showBooksTemplate = require('../handlebar-templates/display-select-book.handlebars');

const showReviewsTemplate = require('../handlebar-templates/display-review-bookshelf.handlebars');

// const updateReviewTemplate = require('../handlebar-templates/display-update-form.handlebars');


const addBookSuccess = (data) => {
  console.log("You've added a book!");
  console.log(data);
};

const addBookFailure = (error) => {
  console.log("Oops, something went wrong.");
  console.log(error);
};

const getBooksSuccess = (data) => {
  console.log("YaY!");
  $('#show-books').html(showBooksTemplate(data));
  console.log(data);
};

const success = (data) => {
  console.log('YAY!!!!');
  $('.show-books').html('Are you there?');
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

const getReviewsSuccess = (data) => {
  console.log("These are your reviews/ books on your bookshelf");
  $('#show-reviews').html(showReviewsTemplate(data));
  console.log(data);
};

const getReviewsFailure = (error) => {
  console.log("No reviews for YOU!");
  console.log(error);
};

const addReviewSuccess = (data) => {
  console.log("You've added a review!");
  console.log(data);
};

const addReviewFailure = (error) => {
  console.log("Oops, something went wrong. No, review.");
  console.log(error);
};

const deleteReviewSuccess = () => {
  console.log("You've removed a book from your bookshelf!");
};

const deleteReviewFailure = () => {
  console.log("Something went wrong, bookshelf still has book.");
};

const getOneReviewSuccess = (data) => {
  console.log("You've updated a book on your bookshelf!");
  // $('#update-this-review').html(updateReviewTemplate(data));
  console.log('this is one review', data);
};

const getOneReviewFailure = (error) => {
  console.log("Something went wrong, book not updated.");
  console.log(error);
};


module.exports = {
  success,
  failure,
  getBooksSuccess,
  addBookSuccess,
  addBookFailure,
  getReviewsSuccess,
  getReviewsFailure,
  addReviewSuccess,
  addReviewFailure,
  deleteReviewSuccess,
  deleteReviewFailure,
  getOneReviewSuccess,
  getOneReviewFailure
};

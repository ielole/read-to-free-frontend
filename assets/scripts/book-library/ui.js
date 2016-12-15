'use strict';

// const api = require('./api.js');

const showBooksTemplate = require('../handlebar-templates/display-select-book.handlebars');

const showReviewsTemplate = require('../handlebar-templates/display-review-bookshelf.handlebars');

const showSearchTemplate = require('../handlebar-templates/display-search-results.handlebars');

// let showReviewsFlag = 0;
// let showBooksFlag = 0;


const addBookSuccess = (data) => {
  // console.log("You've added a book!");
  $(".user-messages").html("You've added a book!");
  // console.log(data);
  $("#add-a-book").trigger("reset");
  return data;
};

const addBookFailure = () => {
  // console.log("Oops, something went wrong.");
  $(".user-messages").html("Oops, something went wrong. Search titles to make sure that book isn't already in the Library.");
  // console.log(error);
};

const getBooksSuccess = (data) => {
  // console.log("YaY!");
  // if(!showBooksFlag) {
    $(".user-messages").html(" ");
    $('#show-books').show();
    $('#show-books').html(showBooksTemplate(data));
  //   showBooksFlag = 1;
  // } else if (showBooksFlag) {
    // $('#show-books').hide();
    // showBooksFlag = 0;
  // }
  // console.log(data);
};

const hideLibrary = () => {
  $('#show-books').html('');
};

const success = () => {
  // console.log('YAY!!!!');
  $('.user-messages').html('Success');
  // console.log(data);
};

const failure = (error) => {
  $('.user-messages').html('Oop, something went wrong, try again.');
  console.log(error);
};

const getReviewsSuccess = (data) => {
  // debugger;
  // console.log("These are your reviews/ books on your bookshelf");
  $('.show-books').html("Here are your reviews on books.");
  // if(!showReviewsFlag) {
  //   $('#show-reviews').show();
    $('#show-reviews').html(showReviewsTemplate(data));
    $('.review-form').hide();
    // $(".user-messages").html(" ");
  //   showReviewsFlag = 1;
  // }
  // else if (showReviewsFlag) {
  //   $('#show-reviews').hide();
  //   showReviewsFlag = 0;
  // }
  // console.log(data);
};

const getReviewsFailure = () => {
  // console.log("No reviews for YOU!");
  // console.log(error);
  $(".user-messages").html("Oops, something went wrong. Make sure you've added a review to a book.");
};

const updateForm = () => {
  $('.review-form').show();
};

const hideBookshelf = () => {
  $('#show-reviews').html('');
};

const addReviewSuccess = () => {
  // console.log("You've added a review!");
  $(".user-messages").html("You've added a book with it's review to your Bookshelf!");
  // console.log(data);
  $(".add-a-review").trigger("reset");
  $(".search-add-review").trigger("reset");
};

const addReviewFailure = () => {
  // console.log("Oops, something went wrong. No, review.");
  $(".user-messages").html("Oops, something went wrong. No, review added.");
  // console.log(error);
  $(".add-a-review").trigger("reset");
  $(".search-add-review").trigger("reset");
};

const deleteReviewSuccess = () => {
  // debugger;
  $(".user-messages").html("You've removed a book from your bookshelf!");
  // console.log("You've removed a book from your bookshelf!");
  $('#show-reviews').show();
  // api.getReviews()
  //   .then(getReviewsSuccess)
  //   .catch(getReviewsFailure);
};

const deleteReviewFailure = () => {
  // console.log("Something went wrong, bookshelf still has book.");
  $(".user-messages").html("Something went wrong, the book is still on the bookhelf.");
};

const updateOneReviewSuccess = () => {
  $(".user-messages").html("You've updated a review!");
  // console.log("You've updated a review!");
  // console.log(data);
  // $('.review-form').hide();
  // api.getReviews()
  //   .then(getReviewsSuccess)
  //   .catch(getReviewsFailure);

  // $('#show-reviews').html(showReviewsTemplate(data));

};

const updateOneReviewFailure = () => {
  // console.log("Oops, something went wrong. Review has not been updated.");
  $(".user-messages").html("Oops, something went wrong. Review has not been updated.");
  // console.log(error);
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

const searchBooksSuccess = (data) => {
  // console.log("These are your search results!");
  $(".user-messages").html("Successful Search");
  // console.log(data);
  $("#search-book-titles").trigger("reset");
  $(".search-results").html(showSearchTemplate(data));
};

const searchBooksFailure = () => {
  // console.log("Oops, something went wrong during the search.");
  $(".user-messages").html("Oops, something went wrong during the search.");
  // console.log(error);
  $("#search-book-titles").trigger("reset");
};

const hideSearch = () => {
  $(".search-results").html('');
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
  updateOneReviewSuccess,
  updateOneReviewFailure,
  getOneReviewSuccess,
  getOneReviewFailure,
  searchBooksFailure,
  searchBooksSuccess,
  hideBookshelf,
  updateForm,
  hideLibrary,
  hideSearch
};

'use strict';

const addBookSuccess = (data) => {
  console.log("You've added a book!");
  console.log(data);
};

const addBookFailure = (error) => {
  console.log("Oops, something went wrong.");
  console.log(error);
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


module.exports = {
  success,
  failure,
  addBookSuccess,
  addBookFailure,
  getReviewsSuccess,
  getReviewsFailure,
  addReviewSuccess,
  addReviewFailure
};

'use strict';

const addBookSuccess = (data) => {
  console.log("You've added a book!");
  console.log(data);
};

const addBookFailure = (data) => {
  console.log("Oops, something went wrong.");
  console.log(data);
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

module.export = {
  success,
  failure,
  addBookSuccess,
  addBookFailure,
};

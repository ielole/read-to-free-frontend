'use strict';

const addBookSuccess = (data) => {
  console.log("You've added a book!");
  console.log(data);
};

const addBookFailure = (data) => {
  console.log("Oops, something went wrong.");
  console.log(data);
};

module.export = {
  addBookSuccess,
  addBookFailure,
};

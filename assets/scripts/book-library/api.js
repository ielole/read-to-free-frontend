'use strict';

const config = require('../config.js');
// const store = require('../store.js');

const addBook = (data) =>
    $.ajax ({
    url: config.host + '/add-book',
    method: 'POST',
    data,
  });


  module.exports = {
    addBook,

};

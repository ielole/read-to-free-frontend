'use strict';

const config = require('../config.js');
const store = require('../store.js');

const addBook = (data) =>
    $.ajax ({
    url: config.host + '/add-book',
    method: 'POST',
    data,
  });

  const getIndex = () =>
      $.ajax ({
      url: config.host + '/books',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    });

  module.exports = {
    addBook,
    getIndex,

};

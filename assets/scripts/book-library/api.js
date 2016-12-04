'use strict';

const config = require('../config.js');
const store = require('../store.js');

const addBook = (data) =>
    $.ajax ({
    url: config.host + '/books',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
      }
  });

const getIndex = () =>
    $.ajax ({
    url: config.host + '/books',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
      }
    });

const getReviews = () =>
    $.ajax ({
    url: config.host + '/reviews',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
      }
    });

const addReview = (data) =>
    $.ajax ({
    url: config.host + '/reviews',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
      }
  });

  module.exports = {
    addBook,
    getIndex,
    getReviews,
    addReview,

};

'use strict';

const authEvents = require('./auth/events.js');
const bookEvents = require('./book-library/events.js');


//on document ready --> when DOM is finished being created
$(()=>{
  authEvents.addAuthHandlers();
  bookEvents.addBookHandlers();
});

const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const itemSchema = new Schema({
  sellers: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved item id from the source API
  itemId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = itemSchema;

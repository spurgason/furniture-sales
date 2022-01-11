const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const itemSchema = new Schema({
  name: {
    
      type: String,
  },

  description: {
    type: String,
    required: true,
  },
  // saved item id from the source API
  image: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId
  },
  price: {
    type: Number,
  },
  quanity: {
    type: Number,
    required: true,
  },
});
const Item = model('Item', itemSchema)

module.exports = Item;

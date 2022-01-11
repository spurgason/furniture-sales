const mongoose = require('mongoose');

const { Schema } = mongoose;

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
  },
  // saved item id from the source API
  image: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0.00
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
});
const Item = mongoose.model('Item', itemSchema)

module.exports = Item;

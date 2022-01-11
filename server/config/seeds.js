const db = require('./connection');
const { User, Item, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Livingroom' },
    { name: 'Kitchen' },
    { name: 'Bedroom' },
    { name: 'Outdoor' },
    { name: 'Bathroom' }
  ]);

  console.log('categories seeded');

  await Category.deleteMany();

  const items = await Item.insertMany([
    {
      name: 'Couch',
      description:
        'Description of couch.',
      image: 'couch.jpg',
      category: categories[0]._id,
      price: 45.99,
      quantity: 1
    },
    {
      name: 'Dinning table',
      description:
        'Description of table.',
      image: 'dinning-table.jpg',
      category: categories[0]._id,
      price: 50.99,
      quantity: 1
    },
    {
      name: 'Bed',
      category: categories[1]._id,
      description:
        'Description of bed.',
      image: 'bed.jpg',
      price: 85.99,
      quantity: 1
    },
    {
      name: 'Glider',
      category: categories[1]._id,
      description:
        'Description of outdoor glider',
      image: 'glidder.jpg',
      price: 13.99,
      quantity: 1
    },
    {
      name: 'Makeup desk',
      category: categories[1]._id,
      description:
        'Description of makeup desk.',
      image: 'makeup-desk.jpg',
      price: 14.99,
      quantity: 1
    },
    {
      name: 'Recliner',
      category: categories[2]._id,
      description:
        'Desription of recliner.',
      image: 'recliner.jpg',
      price: 39.99,
      quantity: 1
    },
    {
      name: 'Bar Stool',
      category: categories[2]._id,
      description:
        'Description of bar stool.',
      image: 'bar-stool.jpg',
      price: 4.99,
      quantity: 1
    },
    {
      name: 'Knightstand',
      category: categories[3]._id,
      description:
        'Description of nightstand.',
      image: 'nightstand.jpg',
      price: 19.99,
      quantity: 1
    },
    {
      name: 'outdoor table',
      category: categories[4]._id,
      description: 'Description of outdoor table',
      image: 'outdoor-table.jpg',
      price: 35.99,
      quantity: 1
    },
    {
      name: 'Linen Shelf',
      category: categories[4]._id,
      description:
        'Description of linen shelf.',
      image: 'linen-shelf.jpg',
      price: 12.99,
      quantity: 1
    },
    {
      name: 'dresser',
      category: categories[4]._id,
      description:
        'Description of dresser.',
      image: 'dresser.jpg',
      price: 27.99,
      quantity: 1
    },
    {
      name: 'ottoman',
      category: categories[4]._id,
      description:
        'Desription of ottoman.',
      image: 'ottoman.jpg',
      price: 29.99,
      quantity: 1
    }
  ]);
//   await Item.deleteMany();

  console.log('items seeded');

  await User.deleteMany();

  await User.create({
    username: 'Josh',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        items: [items[0]._id, items[0]._id, items[1]._id]
      }
    ]
  });

  await User.create({
   username: 'eholt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
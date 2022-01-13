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

    await Item.deleteMany();

  const items = await Item.insertMany([
    {
      name: 'Couch',
      description:
        'This a place holder for a description of this couch to be entered by the seller.',
      image: 'couch.jpg',
      category: categories[0]._id,
      price: 45.99,
      quantity: 1
    },
    {
      name: 'Dinning table',
      description:
        'This a place holder for a description of thi dinning table to be entered by the seller.',
      image: 'dinning-table.jpg',
      category: categories[1]._id,
      price: 50.99,
      quantity: 1
    },
    {
      name: 'Bed',
      category: categories[2]._id,
      description:
        'This a place holder for a description of this bed to be entered by the seller.',
      image: 'bed.jpg',
      price: 85.99,
      quantity: 1
    },
    {
      name: 'Glider',
      category: categories[3]._id,
      description:
        'This a place holder for a description of this outdoor glider to be entered by the seller.',
      image: 'glidder.jpg',
      price: 13.99,
      quantity: 1
    },
    {
      name: 'Makeup desk',
      category: categories[4]._id,
      description:
        'This a place holder for a description of this makeup desk to be entered by the seller.',
      image: 'makeup-desk.jpg',
      price: 14.99,
      quantity: 1
    },
    {
      name: 'Recliner',
      category: categories[0]._id,
      description:
        'This a place holder for a description of this recliner to be entered by the seller.',
      image: 'recliner.jpg',
      price: 39.99,
      quantity: 1
    },
    {
      name: 'Bar Stool',
      category: categories[1]._id,
      description:
        'This a place holder for a description of this bar stool to be entered by the seller.',
      image: 'bar-stool.jpg',
      price: 4.99,
      quantity: 1
    },
    {
      name: 'nightstand',
      category: categories[2]._id,
      description:
        'This a place holder for a description of this nightstand to be entered by the seller.',
      image: 'nightstand.jpg',
      price: 19.99,
      quantity: 1
    },
    {
      name: 'outdoor table',
      category: categories[3]._id,
      description: 'This a place holder for a description of this outdoor table to be entered by the seller.',
      image: 'outdoor-table.jpg',
      price: 35.99,
      quantity: 1
    },
    {
      name: 'Linen Storage Shelf',
      category: categories[4]._id,
      description:
        'This a place holder for a description of this linen storage shelf to be entered by the seller.',
      image: 'linen-shelf.jpg',
      price: 12.99,
      quantity: 1
    },
    {
      name: 'dresser',
      category: categories[2]._id,
      description:
        'This a place holder for a description of this dresser to be entered by the seller.',
      image: 'dresser.jpg',
      price: 27.99,
      quantity: 1
    },
    {
      name: 'ottoman',
      category: categories[0]._id,
      description:
        'This a place holder for a description of this ottoman to be entered by the seller.',
      image: 'ottoman.jpg',
      price: 29.99,
      quantity: 1
    }
  ]);


  console.log('items seeded');

  process.exit();
});
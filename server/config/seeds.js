const db = require('./connection');
const { User, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        {name: 'Chairs'},
        {name: 'Couches'},
        {name: 'End Tables'},
        {name: 'Coffee Tables'},
        {name: 'Dining Room Tables'},
        {name: 'Bed Sets'},
    ]);

    console.log('categories seeded');

    process.exit();
});
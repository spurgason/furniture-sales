const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
          // .populate('items')
          

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {

    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
      
        return {token, user};
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    
    saveItem: async (parent, args, context) => {
      console.log("save an item")
      console.log(context.user)
            if (context.user) {
      //   const savedItem = await Item.create({ ...args, username: context.user.username });
    
       const updatedUser =  await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedItems: args.input } },
          { new: true }
        );
    
      return updatedUser;
      }
    
      throw new AuthenticationError('You need to be logged in!');
  },
  
  removeItem: async (parent, { itemId }, context) => {
    console.log("delete an item")
    if(context.user) {
    const updatedUser = await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $pull: { savedItems: { itemId } } },
        { new: true }
    );

    return updatedUser;
    }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;

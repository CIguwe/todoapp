const resolvers = {
  Query: {
    getItem: async (
      parent,
      { id },
      { models: { Item }, currentUser },
      info,
    ) => {
      const item = await Item.findById({ _id: id }).exec();
      return item;
    },
    getItems: async (parent, args, { models: { Item }, currentUser }, info) => {
      const items = await Item.find({ createdBy: currentUser.id }).exec();
      return items;
    },
  },
  Mutation: {
    createItem: async (
      parent,
      { name, status },
      { models: { Item }, currentUser },
      info,
    ) => {
      const item = await Item.create({
        name,
        status,
        createdBy: currentUser.id,
      });
      return item;
    },
  },
  Item: {
    createdBy: async ({ createdBy }, args, { models: { User } }, info) => {
      const user = await User.findById({ _id: createdBy }).exec();
      return user;
    },
  },
};

export default resolvers;

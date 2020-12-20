const resolvers = {
  Query: {
    getUser: async (
      parent,
      { id },
      { models: { User }, currentUser },
      info,
    ) => {
      const user = await User.findById({ _id: id }).exec();
      return user;
    },
  },
  Mutation: {
    createUser: async (
      parent,
      { email, password },
      { models: { User } },
      info,
    ) => {
      const user = await User.create({ email, password });
      return user;
    },
  },
  User: {
    items: async ({ id }, args, { models: { Item } }, info) => {
      const items = await Item.find({ createdBy: id }).exec();
      return items;
    },
  },
};

export default resolvers;

// const { GraphQLSchema } = require("graphql");
// const RootQuery = require("./query");
// const RootMutation = require("./mutation");

// module.exports = new GraphQLSchema({
// 	query: RootQuery,
// 	mutation: RootMutation,
// });

const User = require("./user");
const School = require("./school");

module.exports = {
  User,
  School,
};

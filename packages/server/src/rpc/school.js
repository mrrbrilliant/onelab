// const { GraphQLObjectType, GraphQLList, GraphQLError } = require("graphql");
// const { ID, IDNonNull, String, StringNonNull } = require("./types");
const { SCHOOL } = require("../models");
const { security_guard } = require("./helper");

// const WorkspaceType = new GraphQLObjectType({
// 	name: "Workspace",
// 	fields: {
// 		id: ID,
// 		name: String,
// 		user_id: ID,
// 	},
// });

const getMyWorkspaces = async () => {
  // await security_guard(args, {
  //   athentication: true,
  //   authorization: true,
  // });
  // return null;
  return await SCHOOL.find();
};

const getWorkspaceByID = async ({ id }) => {
  return await SCHOOL.findById(id);
};

const getWorkspaceByName = async ({ name }) => {
  return await SCHOOL.findOne({ name: name });
};

const isMember = async () => {};

const isValidAction = () => {};

const createWorkspace = async (args) => {
  // let auth = false;
  // try {
  // 	security_guard(args, {
  // 		athentication: true,
  // 		authorization: true,
  // 	}).then((msg) => {
  // 		console.log(msg);
  // 	});
  // } catch (error) {
  // 	throw new GraphQLError(error);
  // }

  // let authenicated = false;
  // let ctx = {};
  // return security_guard(args, {
  //   athentication: true,
  //   authorization: true,
  // })
  //   .then(async (msg) => {
  //     if (msg) {
  //       let new_ws = new SCHOOL({ ...args });
  //       return await new_ws.save();
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     return new Error(error);
  //   });

  let new_ws = new SCHOOL({ ...args });
  return await new_ws.save();
};

const updateWorkspace = async (args) => {
  let { id, ...update } = args;
  await SCHOOL.findOneAndUpdate({ id }, { ...update });
  return await SCHOOL.findById(id);
};

const removeWorkspace = async ({ id }) => {
  return await SCHOOL.findOneAndRemove({ _id: id });
};

module.exports = {
  createWorkspace,
  removeWorkspace,
  getMyWorkspaces,
};

// const WorkspaceQueries = {
// 	getMyWorkspaces: {
// 		type: GraphQLList(WorkspaceType),
// 		resolves: getMyWorkspaces,
// 	},
// 	getWorkspaceByID: {
// 		type: WorkspaceType,
// 		args: {
// 			id: IDNonNull,
// 		},
// 		resolve: getWorkspaceByID,
// 	},
// 	getWorkspaceByName: {
// 		type: WorkspaceType,
// 		args: {
// 			name: StringNonNull,
// 		},
// 		resolve: getWorkspaceByName,
// 	},
// };

// const WorkspaceMutations = {
// 	createWorkspace: {
// 		type: WorkspaceType,
// 		args: {
// 			name: StringNonNull,
// 			user_id: IDNonNull,
// 		},
// 		resolve: createWorkspace,
// 	},
// 	updateWorkspace: {
// 		type: WorkspaceType,
// 		args: {
// 			id: IDNonNull,
// 			name: StringNonNull,
// 			user_id: IDNonNull,
// 		},
// 		resolve: updateWorkspace,
// 	},
// 	removeWorkspace: {
// 		type: WorkspaceType,
// 		args: {
// 			id: IDNonNull,
// 		},
// 		resolve: removeWorkspace,
// 	},
// };

// module.exports = {
// 	WorkspaceType,
// 	WorkspaceMutations,
// 	WorkspaceQueries,
// };

const { GraphQLObjectType, GraphQLList } = require("graphql");
const { ID, IDNonNull, String, StringNonNull } = require("./types");
const { ACTION } = require("../mongo");

const ActionType = new GraphQLObjectType({
	name: "Action",
	fields: {
		id: ID,
		name: String,
		description: String,
		actions: String,
		school_id: String,
	},
});

const getAllActions = async (args, context) => {
	return await ACTION.find();
};

const getActionsByWorkspace = async ({ school_id }, context) => {
	return await ACTION.find({ school_id: school_id });
};

const getActionByID = async ({ id }, context) => {
	return await ACTION.findById(id);
};

const createAction = async (args, context) => {
	let new_action = new ACTION({ ...args });
	return await new_action.save();
};

const updateAction = async (args, context) => {
	let { id, ...update } = args;
	await ACTION.findOneAndUpdate({ _id: id }, { ...update });
	return ACTION.findById(id);
};

const removeAction = async ({ id }, context) => {
	return await ACTION.findOneAndRemove({ _id: id });
};

// const ActionQueries = {
// 	getAllActions: {
// 		type: GraphQLList(ActionType),
// 		resolve: getAllActions,
// 	},
// 	getActionsByWorkspace: {
// 		type: GraphQLList(ActionType),
// 		args: {
// 			school_id: IDNonNull,
// 		},
// 		resolve: getActionsByWorkspace,
// 	},
// 	getActionByID: {
// 		type: ActionType,
// 		args: {
// 			id: IDNonNull,
// 		},
// 		resolve: getActionByID,
// 	},
// };

// const ActionMutations = {
// 	createAction: {
// 		type: ActionType,
// 		args: {
// 			name: StringNonNull,
// 			description: StringNonNull,
// 			actions: StringNonNull,
// 			school_id: StringNonNull,
// 		},
// 		resolve: createAction,
// 	},
// 	updateAction: {
// 		type: ActionType,
// 		args: {
// 			id: IDNonNull,
// 			name: String,
// 			description: String,
// 			actions: String,
// 			school_id: String,
// 		},
// 		resolve: updateAction,
// 	},
// 	removeAction: {
// 		type: ActionType,
// 		args: {
// 			id: IDNonNull,
// 		},
// 		resolve: removeAction,
// 	},
// };

// module.exports = {
// 	ActionType,
// 	ActionMutations,
// 	ActionQueries,
// };

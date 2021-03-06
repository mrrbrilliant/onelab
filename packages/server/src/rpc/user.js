const jwt = require("jsonwebtoken");

const { hash_password, compare_password } = require("./helper");
const { USER, PROFILE } = require("../models");
const { Error } = require("./status");
// const { ProfileType } = require("./profile");

// const UserType = new GraphQLObjectType({
// 	name: "User",
// 	fields: () => ({
// 		id: ID,
// 		email: String,
// 		profile: {
// 			type: ProfileType,
// 			resolve: async (args) => {
// 				return await PROFILE.findOne({ user_id: root.id });
// 			},
// 		},
// 	}),
// });

// Query functions
const getUserByID = async ({ id }) => {
	return await USER.findOne({ _id: id });
};

const getAllUsers = async () => {
	return await USER.find();
};

const getUserByEmail = async ({ email }) => {
	return await USER.findOne({ email: email });
};

// Mutation functions
const signUp = async ({ email, password }) => {
	let hashed_password = hash_password(password);
	let user = new USER({ email, password: hashed_password });
	return await user.save();
};

const changePassword = async (
	{ email, current_password, new_password },
	context
) => {
	const current_user = await getUserByEmail({ email: email });

	if (current_user === null) {
		throw new Error("User not found!");
	}

	const compared_password_result = compare_password(
		current_user,
		current_password
	);

	if (!compared_password_result) {
		throw new Error("Invalid password");
	}

	let hashed_password = hash_password(new_password);

	let filter = { email: email };
	let update = { password: hashed_password };

	return await USER.findOneAndUpdate(filter, update, { upsert: true });
};

const signIn = async ({ email, password }) => {
	try {
		const current_user = await getUserByEmail({ email: email });

		if (current_user === null) {
			throw "User not found!";
		}

		const compared_password_result = compare_password(current_user, password);

		if (!compared_password_result) {
			throw "Invalid password";
		}

		return jwt.sign({ id: current_user._id, email }, process.env.SECRET);
	} catch (e) {
		throw e;
	}
};

const removeUser = async ({ email, password }) => {
	const current_user = await getUserByEmail({ email: email });

	if (current_user === null) {
		throw new Error("User not found!");
	}

	const compared_password_result = compare_password(current_user, password);

	if (!compared_password_result) {
		throw new Error("Invalid password");
	}

	let removed_user = await USER.deleteOne({ email: email });

	if (removed_user === null) {
		throw new Error("Failed to remove user");
	}

	return "User removed";
};

module.exports = {
	signUp,
	signIn,
	getAllUsers,
};

// const UserQueries = {
// 	getUserByID: {
// 		type: UserType,
// 		args: {
// 			id: IDNonNull,
// 		},
// 		resolve: getUserByID,
// 	},
// 	getAllUsers: {
// 		type: GraphQLList(UserType),
// 		resolve: getAllUsers,
// 	},
// };

// const UserMutations = {
// 	signUp: {
// 		type: UserType,
// 		args: {
// 			email: StringNonNull,
// 			password: StringNonNull,
// 		},
// 		resolve: signUp,
// 	},
// 	changePassword: {
// 		type: UserType,
// 		args: {
// 			email: StringNonNull,
// 			current_password: StringNonNull,
// 			new_password: StringNonNull,
// 		},
// 		resolve: changePassword,
// 	},
// 	signIn: {
// 		type: GraphQLString,
// 		args: {
// 			email: StringNonNull,
// 			password: StringNonNull,
// 		},
// 		resolve: signIn,
// 	},
// 	removeUser: {
// 		type: GraphQLString,
// 		args: {
// 			email: StringNonNull,
// 			password: StringNonNull,
// 		},
// 		resolve: removeUser,
// 	},
// };

// module.exports = {
// 	UserType,
// 	UserQueries,
// 	UserMutations,
// 	getAllUsers,
// 	getUserByID,
// 	getUserByEmail,
// };

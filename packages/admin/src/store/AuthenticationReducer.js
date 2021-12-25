export const AUTH_SIGN_IN = "APP/AUTH/SIGN_IN";
export const AUTH_SIGN_OUT = "APP/AUTH/SIGN_OUT";

export const initialState = {
	authentication: {
		auth: false,
		user: {},
	},
};

export const singIn = (credential = { email: "", password: "" }) => ({
	type: AUTH_SIGN_IN,
	credential,
});

export const signOut = () => ({ type: AUTH_SIGN_OUT });

export const AuthenticationReducer = (state = initialState, action) => {
	if (action.type === AUTH_SIGN_IN) {
		return {
			...state,
		};
	}

	if (action.type === AUTH_SIGN_OUT) {
		return {
			...state,
			authentication: {
				auth: false,
				user: {},
			},
		};
	}
};

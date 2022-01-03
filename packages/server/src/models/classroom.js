const { model, Schema } = require("mongoose");

module.exports = model(
	"CLASS",
	new Schema({
		name: { type: String, required: true, unique: true },
		school_id: { type: String, required: true },
	})
);

const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
	comment: {
		type: String,
	},
	userName: {
		type: String,
	},
});
const User = mongoose.model("User", commentSchema);
module.exports = User;

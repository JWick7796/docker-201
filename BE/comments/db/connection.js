const mongoose = require("mongoose");
const connection = "mongodb://db:27017/us";
const connectDb = () => {
	return mongoose.connect(connection, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};
module.exports = connectDb;

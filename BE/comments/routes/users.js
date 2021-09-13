var express = require("express");
var router = express.Router();
const User = require("../db/models/User.model");

/* GET users listing. */
router.get("/", async (req, res) => {
	const comments = await User.find();
	res.json(comments);
});

router.post("/", async (req, res) => {
	const comment = new User({
		comment: req.body.comment,
		userName: req.body.userName,
	});
	await comment
		.save()
		.then(() => {
			res.status(200).send();
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send("Error");
		});
});

module.exports = router;

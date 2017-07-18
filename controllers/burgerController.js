var burgers = require("../models/burger.js");
var path = require("path");
module.exports = function(app) {


	app.get("/api/all", function(req, res) {
		burgers.findAll({}).then(function(data) {
			res.json(data);
		});
	});

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname + "/../index.html"));
	});

	app.post("/api/new", function(req, res) {
		burgers.create({
			name: req.body.name,
			eaten: false
		});	
		res.redirect("/");
	});

	app.post("/:id", function(req, res) {
		var condition = "id = " + req.params.id;


		burgers.update({
			eaten: true},
			{where: {
				id: req.params.id
			}
		}, function() {
			console.log("eaten");
		});
		res.redirect("/");
	});
}
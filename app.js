// jshint esversion: 6

const express = require("express");
const app = express();
const ObjectsToCsv = require('objects-to-csv');
const ejs = require('ejs').__express;
const path = require('path');

app.use('/public', express.static("public"));
app.use(express.urlencoded({ extended: true }));

const port = 2000;
const storagePath = __dirname + '/registration.csv';

app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'ejs')
app.engine('ejs', ejs)

app.get("/", (req, res) => {
	res.render('surveys');
});

app.get(["/:url.html", "/:url"], (req, res, next) => {
	res.render(req.params.url);
});

app.post("/", function (req, res) {
	const teamName = req.body.teamName;
	const teamContactEmail = req.body.teamContactEmail;
	const phoneNumber = req.body.phoneNumber;

	const numOfMembers = req.body.numOfMembers;

	// console.log(req.body);

	let newItem = [
		{
			teamName: teamName,
			teamContactEmail: teamContactEmail,
			phoneNumber: phoneNumber,
			numOfMembers: numOfMembers,
		}
	];

	for (let i = 1; i <= 5; i++) {
		newItem[0]['member' + i.toString() + 'FirstName'] = req.body['member' + i.toString() + 'FirstName'];
		newItem[0]['member' + i.toString() + 'LastName'] = req.body['member' + i.toString() + 'LastName'];
		newItem[0]['member' + i.toString() + 'Email'] = req.body['member' + i.toString() + 'Email'];
		newItem[0]['member' + i.toString() + 'University'] = req.body['member' + i.toString() + 'University'];
		newItem[0]['member' + i.toString() + 'Field'] = req.body['member' + i.toString() + 'Field'];
	}

	console.log(newItem);

	async function toCSV() {
		const csv = new ObjectsToCsv(newItem);

		await csv.toDisk(storagePath, { append: true })
			.then(function () {
				res.redirect('/success');
			})
			.catch(function () {
				res.redirect('/failure');
			});

		// console.log(await csv.toString());
	};

	toCSV();

});

app.listen(port, function () {
	console.log("Server is running on port 3000.");
});

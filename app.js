// jshint esversion: 6

const express = require("express");
const app = express();
const ObjectsToCsv = require('objects-to-csv');

app.use('/public', express.static("public"));
app.use(express.urlencoded({ extended: true }));

const port = 3000;
const storagePath = __dirname + '/registration.csv';

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/surveys.html");
});

app.post("/", function (req, res) {
    const teamName = req.body.teamName;
    const teamContactEmail = req.body.teamContactEmail;
    const phoneNumber = req.body.phoneNumber;

    const numOfMembers = req.body.numOfMembers;

    const member1FirstName = req.body.member1FirstName;
    const member1LastName = req.body.member1LastName;
    const member1Email = req.body.member1Email;
    const member1University = req.body.member1University;
    const member1Field = req.body.member1Field;
    const member1Degree = req.body.member1Degree;

    const member2FirstName = req.body.member2FirstName;
    const member2LastName = req.body.member2LastName;
    const member2Email = req.body.member2Email;
    const member2University = req.body.member2University;
    const member2Field = req.body.member2Field;
    const member2Degree = req.body.member2Degree;

    const member3FirstName = req.body.member3FirstName;
    const member3LastName = req.body.member3LastName;
    const member3Email = req.body.member3Email;
    const member3University = req.body.member3University;
    const member3Field = req.body.member3Field;
    const member3Degree = req.body.member3Degree;

    const member4FirstName = req.body.member4FirstName;
    const member4LastName = req.body.member4LastName;
    const member4Email = req.body.member4Email;
    const member4University = req.body.member4University;
    const member4Field = req.body.member4Field;
    const member4Degree = req.body.member4Degree;

    const member5FirstName = req.body.member5FirstName;
    const member5LastName = req.body.member5LastName;
    const member5Email = req.body.member5Email;
    const member5University = req.body.member5University;
    const member5Field = req.body.member5Field;
    const member5Degree = req.body.member5Degree;

    const newItem = [{
        teamName: teamName,
        teamContactEmail: teamContactEmail,
        phoneNumber: phoneNumber,
        numOfMembers: numOfMembers,

        member1FirstName: member1FirstName,
        member1LastName: member1LastName,
        member1Email: member1Email,
        member1University: member1University,
        member1Field: member1Field,
        member1Degree: member1Degree,

        member2FirstName: member2FirstName,
        member2LastName: member2LastName,
        member2Email: member2Email,
        member2University: member2University,
        member2Field: member2Field,
        member2Degree: member2Degree,

        member3FirstName: member3FirstName,
        member3LastName: member3LastName,
        member3Email: member3Email,
        member3University: member3University,
        member3Field: member3Field,
        member3Degree: member3Degree,

        member4FirstName: member4FirstName,
        member4LastName: member4LastName,
        member4Email: member4Email,
        member4University: member4University,
        member4Field: member4Field,
        member4Degree: member4Degree,

        member5FirstName: member5FirstName,
        member5LastName: member5LastName,
        member5Email: member5Email,
        member5University: member5University,
        member5Field: member5Field,
        member5Degree: member5Degree
    }];

    console.log(newItem);

    async function toCSV() {
        const csv = new ObjectsToCsv(newItem);

        await csv.toDisk(storagePath, { append: true })
            .then(function () {
                res.sendFile(__dirname + "/success.html");
            })
            .catch(function () {
                res.sendFile(__dirname + "/failure.html");
            });

        // console.log(await csv.toString());
    };

    toCSV();

});

app.post("/failure", function (req, res) {
    res.redirect("/");
});

app.listen(port, function () {
    console.log("Server is running on port 3000.");
});
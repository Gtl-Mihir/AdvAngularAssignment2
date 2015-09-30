//var http = require('http');

//http.createServer(function (req, res) {
//    //res.writeHead(200, {'Content-Type': 'text/plain'});
//    //res.end('Hello World\n');
//    ////var sqlite3 = require('sqlite3').verbose();
//    ////var db = new sqlite3.Database('data/demodb01');

//    ////db.serialize(function () {
//    ////    db.run("CREATE TABLE IF NOT EXISTS demo (runtime REAL)");

//    ////    db.run("INSERT INTO demo (runtime) VALUES (?)", new Date().getTime());

//    ////    db.each("SELECT runtime FROM demo", function (err, row) {
//    ////        console.log("This app was run at " + row.runtime);
//    ////    });
//    ////});

//    db.close();
//}).listen(1337, '127.0.0.1');

//console.log('Server running at http://127.0.0.1:1337/');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/Qube');

db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS UserMaster (username VARCHAR, password VARCHAR, email VARCHAR, firstname VARCHAR, lastname VARCHAR)");
});

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

console.log("Server Ready");
app.get('/', function (req, res) {
    res.send('This is my first API made by expressJS. ');
});

console.log("Registering endpoint(Get): /AuthenticateUserList");
app.get('/AuthenticateUserList', function (req, res) {
    try {
        var Username = req.param('uName');
        var Password = req.param('Password');
        if (Username == "" || Password == "" || Username == null || Password == null || Username == "undefined" || Password == "undefined" || Username == undefined || Password == undefined) {
            res.send('Please provide proper parameter');
            return;
        }
        db.get("SELECT * FROM UserMaster where username = '" + Username + "' and password='" + Password + "'", function (err, row) {
            // res.send(JSON.stringify(row) + "\n" + " " + Username + " " + Password + "\n" + err);
            if (row != null) {
                res.send('hello , You are authenticated');
            } else {
                res.send('Oops,You are not registered yet...!!');
            }
        });
    } catch (e) {

    }
});

console.log("Registering endpoint(Post): /AuthenticateUserList");
app.post('/AddNewUser', function (req, res) {
    //var user_id = req.body.id;
    //var token = req.body.token;
    //var geo = req.body.geo;
    var Username = req.param('Username');
    var Password = req.param('Password');
    var email = req.param('email');
    var firstname = req.param('firstname');
    var lastname = req.param('lastname');
    var tran =  db.run("insert into UserMaster (username, password , email, firstname , lastname)values(?,?,?,?,?)", Username, Password, email, firstname, lastname)
    res.send("Success"+ "  "+tran);
});

app.listen(3000, '127.0.0.1');
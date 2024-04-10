var Express = require('express');
var Mongoclient = require('mongodb').MongoClient;
var cors = require('cors');
const multer = require('multer');

var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb://localhost:27017";

var DATABASENAME = "usernameandpassword";
var database;

app.listen(27017, ()  => {
    Mongoclient.connect(CONNECTION_STRING, (error, client) => {
        database = client.db(DATABASENAME);
        console.log("Connected to database");
    })
});
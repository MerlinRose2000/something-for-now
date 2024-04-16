import Express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
//import multer from 'multer';

var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb://localhost:27017";

var DATABASENAME = "username&password";
let database;

app.listen(27017, ()  => {
    
    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        if (error) {
            console.error('Failed to connect to the database. Error:', error);
            return;
        }
        database = client.db(DATABASENAME);
        console.log("Connected to database");
    });
});

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var TODO_LIST = "todos";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// TODO LIST API ROUTES

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/list"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/list", function(req, res) {
  db.collection(TODO_LIST).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get To Dos.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/list", function(req, res) {

  var newToDo = req.body;
  newToDo.complete = false; // could this be added client side?

  db.collection(TODO_LIST).insertOne(newToDo, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new To Do.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });   
});

/*  "/list/:id"
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get("/list/:id", function(req, res) {
});

app.put("/list/:id", function(req, res) {
});

app.delete("/list/:id", function(req, res) {
});

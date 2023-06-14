var mongoDB     = require('mongodb').MongoClient;
//var db = require('mongodb').Db
var connection_string = 'mongodb://alexbot:308boonave@cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/sampledb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
//var connection_string = 'mongodb://alexbot:308boonave@cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/sampledb2?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
var mongodbOptions = {
useNewUrlParser: true,
useUnifiedTopology: true
}
//main().catch(console.error);
//getAllDocuments();
/*function getAllDocuments(res) {
mongoDB.connect("mongodb://boonbot:boonbot@cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/sampledb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", function(err, db) {
//rooms = {};
// if (err) throw err
//
  var dbo = db.db("sampledb");

  db.collection("rooms").find().forEach(function(err, results) {
   //if (err) throw err;
//callback(docs);
  //  console.log('Results!!! ' + results);
console.log('Resultss!!! ' + db.name);


   //db.close();
//alert('Results!!! ' + results);

  });
 // main().catch(console.error);
console.log('Resultss!!! ' + dbo);

});
 }


//run().catch(console.dir);
//var client = MongoClient.connect(uri);
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://boonbot:boonbot@cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/sampledb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
/*async function listCars() {

    let db = await MongoClient.connect(uri);

    let dbo = db.db("sampledb");

    return await dbo.collection("config").find({"config": 1}).forEach();
//results;
//});
};
listCars().then(cars => {
    console.log('Results ${cars.length}'); //You will get your results here

});
**/
/*
MongoClient.connect(uri, function(err, client) {
/*
  const cursor = client.db("sampledb").collection("config").find();
//collection.find().each(function(err, results) {
var ret = [];

    cursor.each(function(err, results){

      //if(doc != null)

        //ret.push(doc);

      //else

        //callback(ret);
  
  //results = [];
    //  console.log(results);

    //  db.close();
  // perform actions on the collection object

  client.close();
console.log(results);
});

//  async function run() {
//MongoClient.connect(uri, function(err, client) {

//  try {

    var database = client.db("sampledb");

    var movies = database.collection("config");

    // query for movies that have a runtime less than 15 minutes

 //   const query = {config: "owner"};

//    const options = {

      // sort returned documents in ascending order by title (A->Z)

  //    sort: { config: 1 },

      // Include only the `title` and `imdb` fields in each returned document

 //     projection: { _id: 0, config: 1 },

 //   };

    var cursor = movies.find({'config': 1});
cursor.each(function(err, results) {
 //client.close();
console.log(results);
  });
    // print a message if no documents were found

//    if ((await movies.countDocuments(query)) === 0) {

  //    console.log("No documents found!");

 //   }

   // for await (const doc of cursor) {

  //    console.log(doc);

  //  }

//  } finally {

  //  await client.close();

//  }
//});
//}

//run().catch(console.log);
});


//import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.

//const uri = "<connection string uri>";
/*
const client = new MongoClient(uri);

async function run() {

  try {

    const database = client.db("sampledb");

    const movies = database.collection("config");

    // query for movies that have a runtime less than 15 minutes

    const query = { name: 1 };

    const options = {

      // sort returned documents in ascending order by title (A->Z)

      sort: { name: 1 },

      // Include only the `title` and `imdb` fields in each returned document

      projection: { _id: 0, name: 1 },

    };

    const cursor = movies.find(query, options);

    // print a message if no documents were found

    if ((await movies.countDocuments(query)) === 0) {

      console.log("No documents found!");

    }

    for await (const doc of cursor) {

      console.dir(doc);

    }

  } finally {

    await client.close();

  }

}

run().catch(console.dir);

*/

//
//const {MongoClient} = require('mongodb');
//main().catch(console.error);
async function main(){

    /**
var allDocs = db.collection(collection).find().toArray(function(err, docs) {
      callback(docs);
      db.close();
    });
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */

  var uri = 'mongodb://boonbot:boonbot@cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/sampledb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
   var client = new MongoClient(uri); //'mongodb://boonbot:boonbot@cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/sampledb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority');
 // var client = MongoClient(uri);
  try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
        await  listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

//main().catch(console.error);
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

/*
//getAllDocuments();
/*
mongoDB.connect(connection_string, function(err, client) {

  client.db("sampledb3").find().toArray(function(err, docs) {
//var allDocs = db.collection(collection).find().toArray(function(err, docs) {

      callback(docs);

   //   db.close();

    });
  // perform actions on the collection object

  client.close();

});
*/
//
//if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  //connection_string = 'mongodb://' + process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
//  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
 // process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
//  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
//  process.env.OPENSHIFT_APP_NAME;
//}

//if(process.env.MONGODB_PASSWORD){

  // //connection_string = 'mongodb://dstl%5Fmike1%40hotmail%2Ecom:308boonave@cluster0-shard-00-00-esmha.mongodb.net:27017,cluster0-shard-00-01-esmha.mongodb.net:27017,cluster0-shard-00-02-esmha.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority' + process.env.MONGODB_USER + ":" +

//  connection_string = 'mongodb://alexbot:308boonave@cluster0-shard-00-00-esmha.mongodb.net:27017,cluster0-shard-00-01-esmha.mongodb.net:27017,cluster0-shard-00-02-esmha.mongodb.net:27017sampledb3?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'; // + process.env.MONGODB_USER + ":" +

 // process.env.MONGODB_PASSWORD + "@" +

 // process.env.MONGODB_SERVICE_HOST + ':' +

//  process.env.MONGODB_SERVICE_PORT + '/' +

//  process.env.MONGODB_DATABASE;

//}
//connect();


function connect(callback){
  mongoDB.connect('mongodb://alexbot:308boonave@cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/sampledb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', function(err, db) {
    if(err) throw err;
    callback(db);
  });
}

/*function getAllDocuments(collection, callback) {

  connect(function(db){
    var cursor = db.collection('sampledb3').find();
    var ret = [];
    cursor.toArray(function(err, docs){
      if(docs)
        ret.push(docs);
      else
        callback(ret);
    });
  });

}

*/

exports.getAllDocuments = function(collection, callback) {
  mongoDB.connect('mongodb://alexbot:308boonave@cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/sampledb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', function(err, db) {
    if(err) throw err;
   // var sampledb3 = [];
    var allDocs = db.collection(collection).find().toArray(function(err, docs) {
      callback(docs);
      db.close();
    });
  });
}

exports.findDocs = function(collection, matchHash, callback) {
  connect(function(db){
    var cursor = db.collection("config").find(matchHash);
    var ret = [];
    cursor.each(function(err, docs){
      if(docs != null)
        ret.push(doc);
      else
        callback(ret);
    });
  });
}

exports.addDoc = function(collection, doc, callback) {
  connect(function(db){
    var ret = db.collection(collection).insert(doc, function(err, result){
      if (callback)
        callback(result);
      db.close();
    });
  });
}

exports.updateOneDoc = function(collection, findJson, updateJson, callback) {
  connect(function(db){
    var ret = db.collection(collection).updateOne(findJson, updateJson, function(err, result) {
      if (callback)
        callback(result);
      db.close();
    })
  });
}

exports.removeOneDoc = function(collection, findJson, callback) {
  connect(function(db){
    var ret = db.collection(collection).deleteOne(findJson, function(err, result){
      if (callback)
        callback(result);
      db.close();
    });
  });
}

exports.countDocs = function (collection, callback) {
  connect(function(db){
    var ret = db.collection(collection).count(function(err, result){
      if (callback)
        callback(result);
      db.close();
    });
  });
}

exports.randomDoc = function(collection, callback) {
  connect(function(db){
    var coll = db.collection(collection);
    cursor = coll.find({});

    coll.count(function(err, count){
      var random = Math.floor(Math.random() * count);
      cursor.skip(random);
      cursor.limit(1);
      cursor.each(function(err, doc){
        if(doc != null){
          callback(doc);
          return;
        }
      });
    });
  });
}

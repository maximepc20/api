//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Maxime', age: 32};
// var {age} = user;
// console.log(age);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err)
    //     {
    //         return console.log('Unable to insert todo: ', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //
    // });

    // db.collection('Users').insertOne({
    //     name: 'Maxime',
    //     age: 32,
    //     location: 'Saint-Lazare'
    // }, (err, result) => {
    //     if(err)
    //     {
    //         return console.log('Unable to insert int Users: ', err);
    //     }
    //
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    client.close();
    console.log('MongoDB server disconnected successfuly');
});

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c26d88331100b53c03346a9')
    }, {
        $set: {name: 'Toto'},
        $inc: {age: -1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //client.close();
    //console.log('MongoDB server disconnected successfuly');
});

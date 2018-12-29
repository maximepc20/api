const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Eat',
        completed: false
    }, (err, result) => {
        if(err)
        {
            return console.log('Unable to insert todo: ', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));

    });

    db.collection('Todos').insertOne({
        text: 'Eat',
        completed: false
    }, (err, result) => {
        if(err)
        {
            return console.log('Unable to insert todo: ', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));

    });

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat'}).then((result) => {
    //     console.log(result);
    // });
    //FindOneAndDelete **FAV
    db.collection('Todos').findOneAndDelete({_id: new ObjectID('5c26eb4dc68fe95870a2e916')}).then((result) => {
        console.log(result);
    });

    //client.close();
    //console.log('MongoDB server disconnected successfuly');
});

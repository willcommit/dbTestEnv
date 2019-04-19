//CRUD operations test MongoDB

//END TIMESTAMP CONNECTION
var start = new Date()

const excel = require('./utils/parseExcel.js')
const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'dbTestEnv'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect')
    }

    const db = client.db(databaseName)

    //parsing excel file into list object 
    const listnames = excel.parseFile("test_files/furuno.xls");

    //END TIMESTAMP CONNECTION
    var end = new Date() - start
    console.log('\nExecution time connection: %dms', end)

    //START TIMESTAMP IMPORTs
    var start2 = new Date()

    //creating collection 'testCase' and bulk importing 'listnames' object
    // db.collection('testCase').insertMany(listnames, (error, result) => {
    //     if(error){
    //         return console.log('ERROR')
    //     }
    //     console.log("\n" + result.insertedCount + " DOCUMENTS ADDED")

    //     //END TIMESTAMP IMPORT
    //     var end2 = new Date() - start2
    //     console.info('\nExecution time import: %dms', end2) 
    // })

    db.collection('testCase').insertMany(listnames).then((result) => {

        console.log("\n" + result.insertedCount + " DOCUMENTS ADDED")
        //END TIMESTAMP IMPORT
        var end2 = new Date() - start2
        console.info('\nExecution time import: %dms', end2) 

    }).catch((error) => {
        console.log(" MONGO ERROR! ")
    })   
})
// import MongoClient and ServerApiVersion from mongodb
import { MongoClient, ServerApiVersion } from 'mongodb';

// import secret uri
import { uri } from '../secret.js';

// create new MongoClient instance and export it
export const client = new MongoClient(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1
});
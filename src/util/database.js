import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://jhyjhy968:mongo1234@cluster0.etgb5cq.mongodb.net/?retryWrites=true&w=majority'
let connectDB

if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url, options).connect()
}
export { connectDB }
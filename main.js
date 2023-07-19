const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors())
app.use(express.json());






async function run(){
    try{
        
     }

    
    finally{

    }
}
run().catch(console.log);


app.get('/', async (req, res) => {
    res.send('e-commerce server running')
})

app.listen(port, () => console.log(`e-commerce server listening on ${port}`))
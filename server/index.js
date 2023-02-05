const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
var jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectId;

const app = express();
const port = process.env.port || 5000;

//MiddleWare
app.use(cors());
require("dotenv").config();

app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.crceb.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

console.log(uri);

//async await
async function run() {
  try {
    console.log("database connected successfully");

    const database = client.db("onlineTouristGuide");
    const divisionCollection = database.collection("divisionCategory");
    const spotCollection = database.collection("touristSpot");
    const bookingCollection = database.collection("booking");
    const userCollection = database.collection("users");


    // users Database

    app.put("/user/:email" , async (req, res) => { 
      const email = req.params.email;
      const user = req.body;
      const filter = {email : email};
      const options = {upsert : true}
      const updateDoc ={
        $set : user,
      }
      const result = await userCollection.updateOne(filter,updateDoc,options)
      // console.log(result);

      const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
      res.send ({result,token})
    })

   app.get("/user",async(req,res) => {
    const query={}
    const result = await userCollection.find(query).toArray()
    res.send(result)

   })

    // Add Division API
    app.post("/add-division", async (req, res) => { 
      const division = req.body;
      //   console.log("Check division", division);
      const result = await divisionCollection.insertOne(division);
      // console.log(result);
      res.send(result);
    });

    app.get("/division", async (req, res) => {
      const query = {};
      const result = await divisionCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/add-spot-division-wise", async (req, res) => {
      const query = {};
      const option = { name: 1 };
      const result = await divisionCollection
        .find(query)
        .project(option)
        .toArray();
      res.send(result);
    });

    // Add spot POST requests
    app.post("/add-spot", async (req, res) => {
      const spot = req.body;
      // console.log("Add Spot API", spot);
      const result = await spotCollection.insertOne(spot);
      console.log(result);
      // res.json(result);
    });

    // Manage spot GET requests for the specified
    app.get("/manage-spot", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await spotCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/all-spot", async (req, res) => {
      const query = {};
      const result = await spotCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/booking/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id:ObjectId(id)};
      const result = await spotCollection.findOne(query);
      res.send(result);
    });


    // Manage spot GET requests
    app.get("/division/:id", async (req, res) => {
      const  id = req.params.id;
      const query = {division : id};
      const result = await spotCollection.find(query).toArray();
      res.send(result);
    });


    // POST booking
    app.post("/booking", async (req, res) => {
      const query = req.body;
      // console.log(query);
      const result = await bookingCollection.insertOne(query);
      // console.log(result);
      res.send(result);
    });

    // My booking
    app.get("/my-booking/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const cursor = bookingCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // All booking
    app.get("/booking", async (req, res) => {
      const query = bookingCollection.find({});
      const result = await query.toArray();
      res.send(result);
    });

    app.delete("/delete-booking/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);
      res.send(result);
    });



  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from node mongo Server");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

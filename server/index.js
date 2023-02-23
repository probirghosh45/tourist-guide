const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
var jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectId;

const app = express();
const port = process.env.port || 7500;

//MiddleWare
// app.use(cors());
app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
require("dotenv").config();

app.use(express.json());
const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

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
    const packageCollection = database.collection("tour-packages");
    const bookingCollection = database.collection("booking");
    const userCollection = database.collection("users");
    const reviewCollection = database.collection("reviews");
    const paymentCollection = client.db("ResaleCycle").collection("payments");

    // users Database

    app.put("/user/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: user,
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      console.log(result);

      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1d",
      });
      res.send({ result, token });
    });

    app.get("/users", async (req, res) => {
      const query = {};
      const result = await userCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

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

    // use Aggregate to query from multiple collections and then merge data into one
    app.get("/all-spot", async (req, res) => {
      const query = {};
      const result = await spotCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/spot/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await spotCollection.findOne(query);
      res.send(result);
    });

    // tour packages
    app.get("/tour-packages", async (req, res) => {
      const query = packageCollection.find({});
      const result = await query.toArray();
      res.send(result);
    });

    app.get("/tour-packages/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await packageCollection.findOne(query);
      res.send(result);
    });

    app.get("/booking/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await spotCollection.findOne(query);
      res.send(result);
    });

    // Manage spot GET requests
    app.get("/division/:id", async (req, res) => {
      const id = req.params.id;
      const query = { division: id };
      const result = await spotCollection.find(query).toArray();
      res.send(result);
    });

    // app.get("/division/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { division: id };
    //   const availableSeats = await spotCollection.find(query).toArray();
    //   res.send(availableSeats);

    //   // get the booking information of the previous spot date

    //   const date = req.params.date;
    //   console.log("date",date);
    //   const bookingQuery = { dateData: date };
    //   const alreadyBooked = await bookingCollection
    //     .find(bookingQuery)
    //     .toArray();
    //   console.log("booked list", alreadyBooked);
    //   availableSeats.forEach((option) => {
    //     const seatBooked = alreadyBooked.filter(
    //       (book) => book.spotName === option.name
    //     );
    //     const bookedSlots = seatBooked.map((book) => book.seat);
    //     const remainingSlots = option.seats.filter(
    //       (seat) => !bookedSlots.includes(seat)
    //     );
    //     option.seats = remainingSlots;
    //   });
    // });

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

    app.get("/booking-payment/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await bookingCollection.findOne(query);
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

    // reviews API

    app.post("/reviews", async (req, res) => {
      const review = req.body;
      // console.log(review);
      const result = await reviewCollection.insertOne(review);
      // console.log(result);
      res.send(result);
    });

    app.get("/reviews", async (req, res) => {
      let query = {};
      if (req.query.reviewerMail) {
        query = {
          reviewerMail: req.query.reviewerMail,
        };
      }

      if (req.query.sid) {
        query = {
          sid: req.query.sid,
        };
      }

      const cursor = reviewCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/reviews/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await reviewCollection.findOne(query);
      res.send(result);
    });

    // app.patch("/reviews/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const result = await reviewCollection.updateOne(
    //     { _id: ObjectId(id) },
    //     { $set: req.body }
    //   );
    //   res.send(result);
    // });

    app.delete("/reviews/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await reviewCollection.deleteOne(query);
      res.send(result);
    });

    //Payment Integration
    app.post("/create-payment-intent", async (req, res) => {
      const { price } = req.body;
      // console.log(price);
      const amount = price * 100;
      console.log(amount);
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "usd",
        amount: amount,
        // automatic_payment_methods: {
        //     enabled: true,
        // },
        payment_method_types: ["card"],
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    app.post("/payments", async (req, res) => {
      const data = req.body;
      const id = data.booking_id;
      const booking = await bookingCollection.updateOne(
        { _id: ObjectId(id) },
        { $set: { status: "paid" } }
      );
      const result = await paymentCollection.insertOne(data);
      console.log(result);
      return res.send(result);
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

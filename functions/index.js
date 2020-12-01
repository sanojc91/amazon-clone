const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const { default: Stripe } = require('stripe');
const sripe = require('stripe')('sk_test_51HqM8EJJ2aetXqKVXfcEYxdgkkXMjaVIxvuB5evSvDxWCQ2wWp1BqToVrnlMjkW1Ze5keXN20KhXdX0saZFOcFGF00nW8xfYVD');

//API


//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('Hello world..!!'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved Boom for this ammount >>>', total );

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-7b120/us-central1/api



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

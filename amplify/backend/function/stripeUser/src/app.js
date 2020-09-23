/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/





const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/user/:userId/subscriptions', async function(req, res) {
   
  // Add your code here
  try { 
    const subscriptions = await stripe.subscriptions.list({
      customer:req.params.userId
    });
    res.json({success: 'Subscriptions received', subscriptions: subscriptions});

  } catch (err) {
    res.json(err)
  }
});

app.get('/user/:userId/charges', async function(req, res) {
   
  // Add your code here
  try { 
    const charges = await stripe.charges.list({
      customer:req.params.userId
    });
    res.json({success: 'Charges received', charges: charges});

  } catch (err) {
    res.json(err)
  }
});

app.get('/user/:userId/invoices', async function(req, res) {
   
  // Add your code here
  try { 
    const invoices = await stripe.invoices.list({
      customer:req.params.userId
    });
    res.json({success: 'Invoices received', invoices: invoices});

  } catch (err) {
    res.json(err)
  }
});

app.get('/user/products', async function(req, res) {
   
  // Add your code here
  try { 
    const products = await stripe.products.list( );
    res.json({success: 'Products received', products: products});

  } catch (err) {
    res.json(err)
  }
});

// app.get('/user/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'get call succeed!', url: req.url});
// });

// /****************************
// * Example post method *
// ****************************/

// app.post('/user', function(req, res) {
//   // Add your code here
//   res.json({success: 'post call succeed!', url: req.url, body: req.body})
// });

// app.post('/user/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'post call succeed!', url: req.url, body: req.body})
// });

// /****************************
// * Example put method *
// ****************************/

// app.put('/user', function(req, res) {
//   // Add your code here
//   res.json({success: 'put call succeed!', url: req.url, body: req.body})
// });

// app.put('/user/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'put call succeed!', url: req.url, body: req.body})
// });

// /****************************
// * Example delete method *
// ****************************/

// app.delete('/user', function(req, res) {
//   // Add your code here
//   res.json({success: 'delete call succeed!', url: req.url});
// });

// app.delete('/user/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'delete call succeed!', url: req.url});
// });

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

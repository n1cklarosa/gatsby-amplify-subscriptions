/* Amplify Params - DO NOT EDIT
	API_STRIPEAPI_APIID
	API_STRIPEAPI_APINAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */ /*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET

var express = require("express")
var bodyParser = require("body-parser")
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware")
var aws = require("aws-sdk")
var ses = new aws.SES({ region: "ap-southeast-2" })

const sendEmail = async (subject, body) => {
  var emailBody = body
  console.log("Sending an email now", subject, body)
  var params = {
    Destination: {
      ToAddresses: ["nick@nicklarosa.net"],
    },
    Message: {
      Body: {
        Text: { Data: emailBody },

        Html: { Data: emailBody },
      },

      Subject: { Data: subject },
    },
    Source: "nick@nicklarosa.net",
  }
  console.log("About to send email")
  try {
    var email = await ses.sendEmail(params).promise();
  } catch(err) {
    console.log('There was an error')
  }
  // var email = await ses
  //   .sendEmail(params, function (err, data) {
  //     if (err) {
  //       console.log("We failed?", err)
  //       context.fail({ status: false, msg: err })
  //     } else {
  //       return true
  //     }
  //   })
  //   .promise()
    console.log("email sent", email)

  return true
}

// declare a new express app
var app = express()
// app.use(bodyParser.json())
app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      req.rawBody = buf.toString()
    },
  })
)
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.post("/webhook", async function (req, res) {
  // Check Stripe signature
  const sig = req.headers["stripe-signature"]
  let sentEmail
  let event
  console.log("hook received", req.body, req.rawBody, sig, req) 
  
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret)
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }
  switch (event.type) {
    case "checkout.session.completed":
      console.log(
        `Payment checkout session for ${req.body.data.object.client_reference_id} was successful!`
      )

      break
    case "invoice.paid":
      console.log("Invoice Paid", req.body)
      sentEmail = await sendEmail("New Invoice Paid", "Yay!")
      break
    case "customer.subscription.created":
      console.log("Subscription Created", req.body)
      sentEmail = await sendEmail("New Subscription Made", "Yay!")
      break
    case "payment_intent.succeeded":
      console.log("payment_intent.succeeded", req.body)

      break
    case "charge.succeeded":
      console.log("charge.succeeded", req.body)
      sentEmail = await sendEmail("New Charge Succeeded", "Yay!")

      break
    case "customer.subscription.deleted":
      console.log("customer.subscription.deleted", req.body)

      break
    case "customer.subscription.created":
      console.log("customer.subscription.created", req.body)

      break
    default:
      res.json({ received: true })
    // Unexpected event type
    // return res.status(400).end()
  }

  // Return a response to acknowledge receipt of the event
  res.json({ received: true })
})
app.listen(3000, function () {
  console.log("App started")
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

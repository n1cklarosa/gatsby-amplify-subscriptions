import React from "react"
import { API, Auth } from "aws-amplify"
import { loadStripe } from "@stripe/stripe-js"
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)

const CheckoutButton = () => {
  const redirectToCheckout = async () => {
    const fetchSession = async () => {
      const apiName = "stripeAPI"
      const apiEndpoint = "/checkout"
      const body = {
        quantity: 1,
        client_reference_id: Auth.user.attributes.sub,
        customer: Auth.user.attributes['custom:stripe_id'],
        customer_email: Auth.user.attributes['email'],
        priceId: "price_1HTzBbAx3RhHxtkSmkVuVTNL"
      }
      const session = await API.post(apiName, apiEndpoint, { body })
      return session
    }

    const session = await fetchSession()
    const sessionId = session.id
    const stripe = await stripePromise
    stripe.redirectToCheckout({ sessionId })
  }

  return <button onClick={redirectToCheckout}>Continue to payment</button>
}

export default CheckoutButton

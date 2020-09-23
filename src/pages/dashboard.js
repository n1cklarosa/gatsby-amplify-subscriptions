import React, { useEffect } from "react"
import { API, Auth } from "aws-amplify"
import { withAuthenticator } from "@aws-amplify/ui-react"

import Layout from "../components/layout"
import AuthSubscriptions from "../components/authSubscriptions"
import AuthCharges from "../components/authCharges" 
import AuthInvoices from "../components/authInvoices"
import { PageTitle } from "../components/styled/global"
import SEO from "../components/seo"

const Dashboard = ({ location }) => {
  const locationDetails = location ? location : { pathname: "dashboard" }
  const user = Auth.user

  const createNewUser = async () => {
    const createUser = async () => {
      const apiName = "stripeAPI"
      const apiEndpoint = "/newuser"
      const body = {
        email: Auth.user.attributes.email,
        userId: Auth.user.attributes.sub,
      }
      const user = await API.post(apiName, apiEndpoint, { body })
      return user
    }
    var stripe_user = await createUser()

    await Auth.updateUserAttributes(user, {
      "custom:stripe_id": stripe_user.id,
    })
  }

  useEffect(() => {
    if ("custom:stripe_id" in user.attributes) {
    } else {
      createNewUser()
    }
  })

  return (
    <Layout location={locationDetails}>
      <SEO title="All posts" />
      <PageTitle>Dashboard</PageTitle>
      {user.attributes["custom:stripe_id"] && (
        <> 
          <AuthSubscriptions />
          <AuthCharges />
          <AuthInvoices /> 
        </>
      )}
    </Layout>
  )
}

export default withAuthenticator(Dashboard)

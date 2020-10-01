import React, { useEffect, useState } from "react"
import { API, Auth } from "aws-amplify"
import { withAuthenticator } from "@aws-amplify/ui-react"

import AuthLayout from "../components/authLayout"
import AuthSubscriptions from "../components/authSubscriptions"
import AuthCharges from "../components/authCharges"
import AuthInvoices from "../components/authInvoices"
import { PageTitle } from "../components/styled/global"
import { PageSection } from "../components/styled/auth"
import SEO from "../components/seo"

const Dashboard = ({ location }) => {
  const locationDetails = location ? location : { pathname: "dashboard" }
  const [user, setUser] = useState(Auth.user)
 

  const createNewUser = async () => {
     
    const createUser = async () => {
      const apiName = "stripeAPI"
      const apiEndpoint = "/newuser"
      const body = {
        email: Auth.user.attributes.email,
        userId: Auth.user.attributes.sub,
      }
      const stripeUser = await API.post(apiName, apiEndpoint, { body })
      return stripeUser
    }
    var stripe_user = await createUser()

    await Auth.updateUserAttributes(user, {
      "custom:stripe_id": stripe_user.id,
    });
    
    await Auth.currentAuthenticatedUser({
      bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(updatedUser => {
       setUser(updatedUser)();
      // console.log(`Load additional settings for user: ${user.username}`);
      // TBD
    }).catch(err => console.log("there was an error updating user details",err));
  }

  useEffect(() => {
    if ("custom:stripe_id" in user.attributes) {
    } else {
      createNewUser()
    }
  })

  return (
    <AuthLayout location={locationDetails}>
      <SEO title="Your billing Dashboard" />
      <PageTitle>Dashboard</PageTitle>
      {user.attributes["custom:stripe_id"] && (
        <>
          <PageSection>
            {user && user.attributes['custom:stripe_id'] ? <AuthSubscriptions user={user} /> : null}
          </PageSection>
          <PageSection>
            {user && user.attributes['custom:stripe_id'] ? <AuthCharges user={user} /> : null}
          </PageSection>
          <PageSection>
            {user && user.attributes['custom:stripe_id'] ? <AuthInvoices user={user} /> : null}{" "}
          </PageSection>
        </>
      )}
    </AuthLayout>
  )
}

export default withAuthenticator(Dashboard)

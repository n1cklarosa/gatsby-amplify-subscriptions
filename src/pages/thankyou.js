import React from "react"
 
import { FlexWrapper } from "../components/styled/global"
import { PageTitle } from "../components/styled/global"
import { withAuthenticator } from "@aws-amplify/ui-react"

import AuthLayout from "../components/authLayout"
import SEO from "../components/seo"
 

const ThanYou = ({ location }) => {
  const locationDetails = location ? location : { pathname: "thanks" }
  return (
    <AuthLayout location={locationDetails} title={"Self Hosted Options"}>
      <SEO title="Thanks!" />
      <PageTitle>THANKS! </PageTitle>
      <FlexWrapper>
        <div style={{width:"100%"}}>
          <p>Thanks for signing up!</p>
          <p>
            Be sure to bookmark this site to access your account history or
            cancel at anytime.
          </p>
        </div>
      </FlexWrapper>
    </AuthLayout>
  )
}

export default withAuthenticator(ThanYou)

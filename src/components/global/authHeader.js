import React from "react"
import { Link } from "gatsby"
import { Auth } from "aws-amplify"
import {
  HeaderComponent,
  SiteBranding,
  TransparentButton,
} from "../styled/global"
import { withAuthenticator } from "@aws-amplify/ui-react"

const AuthHeader = ({ title }) => {
 

  function onSignOutClicked() {
    Auth.signOut();
    window.location.href="/"
  }

  return (
    <HeaderComponent>
      <SiteBranding>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          Gatsby Stripe
        </Link>
      </SiteBranding>
      <div>
        <TransparentButton
           onClick={() => onSignOutClicked()}
           aria-label={"sign out"}
        >
          Logout
        </TransparentButton>
      </div>
    </HeaderComponent>
  )
}

export default withAuthenticator(AuthHeader)

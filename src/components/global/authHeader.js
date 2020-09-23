import React, { useEffect } from "react"
import { Link } from "gatsby"
import { Auth } from "aws-amplify"
import {
  HeaderComponent,
  SiteBranding,
  TransparentButton,
} from "../styled/global"
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react"

const AuthHeader = ({ title }) => {
  const getCurrentUser = async () => {
    const anonymousUser = await Auth.currentAuthenticatedUser()
  }

  useEffect(() => {
    console.log("got here")
    getCurrentUser()
  }, [])

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

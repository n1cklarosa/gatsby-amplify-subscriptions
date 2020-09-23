import React  from "react"
import { Link } from "gatsby"
// import { Auth } from "aws-amplify"
import { HeaderComponent, SiteBranding } from "../styled/global"

const Header = ({ title }) => {
 
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
          {title}
        </Link>
      </SiteBranding>
      <div>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/dashboard`}
        >
          Login
        </Link>
        </div>
    </HeaderComponent>
  )
}

export default Header

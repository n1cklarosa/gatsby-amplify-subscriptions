import React from "react"
import Header from "../components/global/header"
import AuthFooter from "../components/global/authFooter"
import AuthHeader from "../components/global/authHeader"

import { PageLayout, PageWrapper } from "../components/styled/auth"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

const AuthLayout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = <Header title={title} />
  } else if ((location.pathname === "dashboard")||(location.pathname === "thanks")) {
    header = <AuthHeader title={title} />
  } else {
    header = <Header title={title} />
  }
  return (
    <div>
      {header}
      <PageLayout>
        <PageWrapper>{children}</PageWrapper>
      </PageLayout>

      <AuthFooter />
    </div>
  )
}

export default AuthLayout

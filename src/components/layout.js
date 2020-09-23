import React from "react"
import { Link } from "gatsby"
import Header from "../components/global/header"
import AuthHeader from "../components/global/authHeader"

import { rhythm } from "../utils/typography"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = <Header title={title} />
  } else if(location.pathname === 'dashboard') {
    header = <AuthHeader title={title} />
  } else {
    header = <Header  title={title}/>
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: `960px`,
        padding: `0 ${rhythm(3 / 4)}`,
      }}
    >
      {header}
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

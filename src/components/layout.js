import React from "react" 
import Header from "../components/global/header"
import Footer from "../components/global/footer"
import AuthHeader from "../components/global/authHeader"

import { PageLayout } from '../components/styled/global'
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
    <div >
       
      {header}
      <PageLayout>{children}</PageLayout>
      
      <Footer />
         
    </div>
  )
}

export default Layout

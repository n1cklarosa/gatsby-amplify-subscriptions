import React from "react" 
 
import Layout from "../components/layout"
import SEO from "../components/seo"  

const Thankyou = ({   location }) => { 

  return (
    <Layout location={location} >
      <SEO title="All posts" />
       Thanks!
    </Layout>
  )
}

export default Thankyou
 
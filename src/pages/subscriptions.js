import React from "react" 
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
 
import Layout from "../components/layout"
import SEO from "../components/seo"  

const Subscriptions = ({ location }) => { 
    const locationDetails = location ? location : {pathname:'subscriptons'}

  return (
    <Layout location={locationDetails} >
      <SEO title="All posts" />
       
       Here is the subscriptions page
        
       <AmplifySignOut />
    </Layout>
  )
}

export default withAuthenticator(Subscriptions)
 
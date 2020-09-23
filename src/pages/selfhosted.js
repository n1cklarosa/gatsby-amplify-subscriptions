import React from "react"

import { data } from "../content/data"
import { FlexWrapper, Option, OptionContent } from "../components/styled/global"
import CheckoutButton from "../components/CheckoutButton"
import { withAuthenticator } from "@aws-amplify/ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const env = process.env.ENVIRONMENT

const SelfHosted = ({ location }) => {
  const locationDetails = location ? location : { pathname: "dashboard" }
  return (
    <Layout location={locationDetails} title={"Self Hosted Options"}>
      <SEO title="Self Hosted Options" />
      <FlexWrapper>
        {data &&
          data[env].selfHosted.map((plan, i) => {
            return (
              <Option key={i}>
                <OptionContent>
                  <h3>{plan.title}</h3>
                  <h4>${plan.currentPrice} per month</h4>
                  <div>
                    {plan.subtitle}
                    <ul className={"contents"}>
                      {plan.items.map((item, k) => {
                        return <li key={k}>{item}</li>
                      })}
                    </ul>
                  </div>
                  <CheckoutButton priceId={plan.id} title={"Sign Up Now!"} />
                </OptionContent>
              </Option>
            )
          })}
      </FlexWrapper>
    </Layout>
  )
}

export default withAuthenticator(SelfHosted)

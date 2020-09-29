import React from "react"

import { data } from "../content/data"
import { FlexWrapper } from "../components/styled/global"
import { PageTitle, SectionTitle } from "../components/styled/global"
import { withAuthenticator } from "@aws-amplify/ui-react"
import PackageOption from "../components/packageOption"

import AuthLayout from "../components/authLayout"
import SEO from "../components/seo"

const env = process.env.ENVIRONMENT

const Packages = ({ location }) => {
  const locationDetails = location ? location : { pathname: "dashboard" }

  return (
    <AuthLayout location={locationDetails} title={"Self Hosted Options"}>
      <SEO title="Self Hosted Options" />
      <PageTitle>Choose a Package</PageTitle>
      <FlexWrapper>
        <div>
          <SectionTitle>Tier 1</SectionTitle>
        </div>
      </FlexWrapper>
      <FlexWrapper>
        {data &&
          data[env].packages
            .filter(
              pack => pack.categories && pack.categories.includes("tier1")
            )
            .map((plan, i) => {
              return <PackageOption plan={plan} key={i} />
            })}
      </FlexWrapper>
      <br />
      <br />
      <FlexWrapper>
        <div>
          <SectionTitle>Tier 2</SectionTitle>
        </div>
      </FlexWrapper>
      <FlexWrapper>
        {data &&
          data[env].packages
            .filter(
              pack => pack.categories && pack.categories.includes("tier2")
            )
            .map((plan, i) => {
              return <PackageOption plan={plan} key={i} />
            })}
      </FlexWrapper>
      <br />
      <br />
      <FlexWrapper>
        <div>
          <SectionTitle>Admin Plans</SectionTitle>
        </div>
      </FlexWrapper>
      <FlexWrapper>
        {data &&
          data[env].packages
            .filter(
              pack => pack.categories && pack.categories.includes("admin")
            )
            .map((plan, i) => {
              return <PackageOption plan={plan} key={i} />
            })}
      </FlexWrapper>
    </AuthLayout>
  )
}

export default withAuthenticator(Packages)

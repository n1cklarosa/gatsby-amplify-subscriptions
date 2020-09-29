import React from "react"
import { SiteFooter, PageLayout, PageWrapper } from "../styled/auth"
import { Link } from "gatsby"

function AuthFooter() {
  return (
    <SiteFooter>
      <PageLayout>
        <PageWrapper>
          <p>
            <Link to={"/contact"}>Contact Me</Link> NLR Audio Services ©{" "}
          </p>
          <p>
            {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </p>
        </PageWrapper>
      </PageLayout>
    </SiteFooter>
  )
}

export default AuthFooter

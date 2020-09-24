import React from "react"
import { SiteFooter, PageLayout, PageWrapper } from "../styled/auth"

function AuthFooter() {
  return (
    <SiteFooter>
      <PageLayout>
        <PageWrapper>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </PageWrapper>
      </PageLayout>
    </SiteFooter>
  )
}

export default AuthFooter

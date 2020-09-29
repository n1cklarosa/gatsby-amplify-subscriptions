import React from "react"
import { SiteFooter, PageLayout, PageWrapper } from "../styled/global"
import { Link } from "gatsby"

function Footer() {
  return (
    <SiteFooter>
      <PageLayout>
        <PageWrapper>
          <p>
            <Link to={"/contact"}>Contact Me</Link> 
          </p>
          <p>NLR Audio Services ©{" "}
            {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </p>
        </PageWrapper>
      </PageLayout>
    </SiteFooter>
  )
}

export default Footer

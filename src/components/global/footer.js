import React from "react"
import { SiteFooter, PageLayout } from "../styled/global"

function Footer() {
  return (
    <SiteFooter>
      <PageLayout>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </PageLayout>
    </SiteFooter>
  )
}

export default Footer

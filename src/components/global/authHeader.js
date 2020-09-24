import React from "react"
import { Link } from "gatsby"
import { Auth } from "aws-amplify"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { TransparentButton } from "../styled/global"
import { AuthHeaderComponent, HeaderCol, SiteBranding } from "../styled/auth"
import { withAuthenticator } from "@aws-amplify/ui-react"

import { FiLogOut } from "react-icons/fi"

const AuthHeader = ({ title }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      avatar: file(absolutePath: { regex: "/cloud.png/" }) {
        childImageSharp {
          fluid(maxWidth: 50, maxHeight: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fluid
  function onSignOutClicked() {
    Auth.signOut()
    window.location.href = "/"
  }

  return (
    <AuthHeaderComponent>
      <HeaderCol>
        {avatar && (
          <Image
            fluid={avatar}
            alt={author?.name || ``}
            style={{
              marginRight: "25px",
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        )}
        <SiteBranding>
          <Link
            style={{
              boxShadow: `none`,
              color: `white`,
            }}
            to={`/`}
          >
            NLR Audio Services
          </Link>
        </SiteBranding>
      </HeaderCol>

      <HeaderCol>
        <TransparentButton
          onClick={() => onSignOutClicked()}
          aria-label={"sign out"}
        >
          <FiLogOut style={{color:'white'}} />
        </TransparentButton>
      </HeaderCol>
    </AuthHeaderComponent>
  )
}

export default withAuthenticator(AuthHeader)

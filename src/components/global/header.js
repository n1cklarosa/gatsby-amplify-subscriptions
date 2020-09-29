import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { HeaderComponent, HeaderCol, SiteBranding } from "../styled/global"
import { FiLogIn } from "react-icons/fi"

const Header = ({ title }) => {
  const data = useStaticQuery(graphql`
    query SiteLogoQuery {
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
  const avatar = data?.avatar?.childImageSharp?.fluid
  return (
    <HeaderComponent>
      <HeaderCol>
        {avatar && (
          <Image
            fluid={avatar}
            alt={title}
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
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </SiteBranding>
      </HeaderCol>
      <HeaderCol>
        <Link
          style={{
            boxShadow: `none`,
            color: `white`,
          }}
          to={`/dashboard`}
        >
          <FiLogIn style={{ color: "white" }} />
        </Link>
      </HeaderCol>
    </HeaderComponent>
  )
}

export default Header

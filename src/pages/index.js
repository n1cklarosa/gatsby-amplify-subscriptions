import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"
import Typewriter from "typewriter-effect"
import {
  HomePageLeader,
  PageWrapper,
  TypeWriterCss,
} from "../components/styled/global"
// import { rhythm } from "../utils/typography"

const SiteIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Professional Ondemand Audio Streaming" />
      <PageWrapper>
        <HomePageLeader>
          <TypeWriterCss>
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .pauseFor(150)
                  .typeString("Enterprise Grade Audio Streaming and Ondemand API")
                  .pauseFor(600)
                  .deleteAll()
                  .typeString("Always online, access anny")
                  .pauseFor(100)
                  .changeDeleteSpeed(25)
                  .deleteChars(2)
                  .typeString("y where, any time")
                  .changeDeleteSpeed("natural")
                  .pauseFor(300)
                  .deleteAll()
                  .typeString("Download your station audio in multiple formats")
                  .pauseFor(500)
                  .changeDeleteSpeed("natural")
                  .pauseFor(300)
                  .deleteAll()
                  .typeString("Live on air statistics")
                  .pauseFor(500)

                  .start()
              }}
              options={{ cursor: "_", loop: true }}
            />
          </TypeWriterCss>
        </HomePageLeader>
      </PageWrapper>
      {/* {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug
        return (
          <article
            key={post.fields.slug}
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none` }}
                  to={post.fields.slug}
                  itemProp="url"
                >
                  <span itemProp="headline">{title}</span>
                </Link>
              </h3>
              <small>{post.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </article>
        )
      })} */}
    </Layout>
  )
}

export default SiteIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

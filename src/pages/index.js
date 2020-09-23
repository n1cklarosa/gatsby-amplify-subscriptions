import React from "react"
// import { Link, graphql } from "gatsby" 
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"
import { HomePageLeader} from "../components/styled/global"
// import { rhythm } from "../utils/typography"

const BlogIndex = ({  location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} title={siteTitle}>
  //       <SEO title="All posts" />
  //       <Bio />
  //       <p>No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).</p>
  //     </Layout>
  //   )
  // }

  return (
    <Layout location={location} title={"Gatsby Stripe"}>
      <SEO title="Professional Ondemand Audio Streaming" />
      <HomePageLeader><Bio /></HomePageLeader> 
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

export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `

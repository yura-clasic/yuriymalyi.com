import React from "react"
import { graphql, type PageProps } from "gatsby"
import Layout from "../components/layout"
import Item from "../components/item"
import PageHead from "../components/page-head"
import { type PostNode } from "../types"

interface PostsPageData {
  posts: {
    edges: Array<{
      node: PostNode;
    }>;
  };
}

const BlogPage = ({ data }: { data: PostsPageData }) => {
  return (
    <Layout language="en">
      <div className="">
        <div className="latest-items head">
          <div className="title">Blog</div>
        </div>
        <div className="wrapper-items">
          <div className="items grided">
            {data.posts.edges.map(({ node }) => (
              <Item key={node.frontmatter.slug} language="en" type="post" node={node} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const Head = () => (
  <>
    <PageHead
      title="Blog | Yuriy Malyi"
      description="Blog posts on process implementation and Quality Assurance."
    />
  </>
)

export const query = graphql`
  query BlogPageQuery {
    posts: allMdx(
      sort: { frontmatter: { title: ASC } }
      filter: { 
        internal: { contentFilePath: { regex: "/content/posts/" } }
        frontmatter: { lang: { eq: "en" } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            slug
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
          }
        }
      }
    }
  }
`

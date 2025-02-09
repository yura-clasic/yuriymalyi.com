import React from "react"
import { graphql, type PageProps } from "gatsby"
import Layout from "../../components/layout"
import Item from "../../components/item"
import PageHead from "../../components/page-head"
import { type PostNode } from "../../types"

interface PostsPageData {
  posts: {
    edges: Array<{
      node: PostNode;
    }>;
  };
}

const BlogPage = ({ data }: { data: PostsPageData }) => {
  return (
    <Layout language="ru">
      <div className="">
        <div className="latest-items head">
          <div className="title">Блог</div>
        </div>
        <div className="wrapper-items">
          <div className="items grided">
            {data.posts.edges.map(({ node }) => (
              <Item key={node.frontmatter.slug} language="ru" type="post" node={node} />
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
      title="Блог | Yuriy Malyi"
      description="Блог по темам."
    />
  </>
)

export const query = graphql`
  query BlogPageQuery {
    posts: allMdx(
      sort: { frontmatter: { title: ASC } }
      filter: { 
        internal: { contentFilePath: { regex: "/content/posts/" } }
        frontmatter: { lang: { eq: "ru" } }
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

import React from 'react'
import { graphql, type PageProps, Link } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Items from '../components/items'
import PageHead from '../components/page-head'
import { ArrowRightSIcon } from '@remixicons/react/line'
import type { IndexPageData } from '../types'

const IndexPage = ({ data }: { data: IndexPageData }) => {
  return (
    <Layout language="en">
      {/* Hero Section */}
      <Hero />

      {/* Latest Courses Section */}
      <section className="latest-items">
        <div className="head">
          <div className="title">Latest Courses</div>
          <Link to="/courses" className="link">
            View all courses
            <ArrowRightSIcon className="icon" />
          </Link>
        </div>
        <Items language="en" type="course" items={data.courses.edges} />
      </section>

      {/* Latest Posts Section */}
      <section className="latest-items">
        <div className="head">
          <div className="title">Latest Posts</div>
          <Link to="/posts" className="link">
            View all posts
            <ArrowRightSIcon className="icon" />
          </Link>
        </div>
        <Items language="en" type="post" items={data.posts.edges} />
      </section>
    </Layout>
  )
}

export const Head = () => (
  <>
    <PageHead
      title="Yuriy Malyi - Head of QA"
      description="Personal website and blog of Yuriy Malyi, Head of QA specializing in setting up the effective processes and Quality Assurance."
    />
  </>
)

export const query = graphql`
  query HomePageQuery {
    posts: allMdx(
      limit: 6
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
    courses: allMdx(
      sort: { frontmatter: { position: ASC } }
      limit: 6
      filter: {
        internal: { contentFilePath: { regex: "/content/courses/" } }
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
            video
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

export default IndexPage

import React from 'react'
import { graphql, type PageProps, Link } from 'gatsby'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import Items from '../../components/items'
import PageHead from '../../components/page-head'
import { ArrowRightSIcon } from '@remixicons/react/line'
import type { IndexPageData } from '../../types'

const IndexPage = ({ data }: { data: IndexPageData }) => {
  return (
    <Layout language="ru">
      {/* Hero Section */}
      <Hero />

      {/* Latest Courses Section */}
      <section className="latest-items">
        <div className="head">
          <div className="title">Последние курсы</div>
          <Link to="/ru/courses" className="link">
            Все курсы
            <ArrowRightSIcon className="icon" />
          </Link>
        </div>
        <Items language="ru" type="course" items={data.courses.edges} />
      </section>

      {/* Latest Posts Section */}
      <section className="latest-items">
        <div className="head">
          <div className="title">Последние статьи</div>
          <Link to="/ru/posts" className="link">
            Все статьи
            <ArrowRightSIcon className="icon" />
          </Link>
        </div>
        <Items language="ru" type="post" items={data.posts.edges} />
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
    courses: allMdx(
      sort: { frontmatter: { position: ASC } }
      limit: 6
      filter: {
        internal: { contentFilePath: { regex: "/content/courses/" } }
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

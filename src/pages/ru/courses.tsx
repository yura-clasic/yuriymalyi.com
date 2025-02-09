import React from "react"
import { graphql, type PageProps } from "gatsby"
import Layout from "../../components/layout"
import Item from "../../components/item"
import PageHead from "../../components/page-head"
import { type CourseNode } from "../../types"

interface CoursesPageData {
  courses: {
    edges: Array<{
      node: CourseNode;
    }>;
  };
}

const CoursesPage = ({ data }: { data: CoursesPageData }) => {
  return (
    <Layout language="ru">
      <div className="">
        <div className="latest-items head">
          <div className="title">Мои курсы</div>
        </div>
        <div className="wrapper-items">
          <div className="items grided">
            {data.courses.edges.map(({ node }) => (
              <Item key={node.frontmatter.slug} language="ru" type="course" node={node} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CoursesPage

export const Head = () => (
  <>
    <PageHead title="Мої курси | Yuriy Malyi" description="Мої курси" />
  </>
)

export const query = graphql`
  query CoursesQuery {
    courses: allMdx(
      sort: { frontmatter: { position: ASC } }
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

import React, { useEffect, type ReactNode } from 'react'
import { graphql, Link, type PageProps } from 'gatsby'
import { GatsbyImage, getImage, StaticImage, type IGatsbyImageData } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import TableOfContents from '../components/table-of-contents'
import generateTableOfContents from '../utils/table-of-contents'
import PageHead from '../components/page-head'
import { MDXProvider } from '@mdx-js/react'
import { LinksIcon } from '@remixicons/react/fill'
import Tip from '../components/tip'
import VideoEmbed from '../components/video-embed'
import type { LanguageProps } from 'src/types'

interface CourseData {
  mdx: {
    body: string
    frontmatter: {
      title: string
      description: string
      technologies: string[]
      paylink: string
      url?: string
      lang: LanguageProps
      thumbnail: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
  previous: {
    frontmatter: {
      title: string
      slug: string
    }
  } | null
  next: {
    frontmatter: {
      title: string
      slug: string
    }
  } | null
}

const CourseTemplate = ({ data, children }: { data: CourseData; children: ReactNode }) => {
  const { mdx: course, previous, next } = data
  const image = getImage(course.frontmatter.thumbnail)
  const tableOfContents = generateTableOfContents(course.body)
  console.log('data', data)

  const shortcodes = { Link, StaticImage, Tip, VideoEmbed } // Provide common components here

  useEffect(() => {
    const content = document.querySelector('.template-content')
    if (content) {
      const headings = content.querySelectorAll('h1, h2, h3')
      headings.forEach((heading) => {
        if (!heading.id) {
          heading.id = heading.textContent?.toLowerCase().replace(/\s+/g, '-') || ''
        }
      })
    }
  }, [])

  return (
    <Layout language={course.frontmatter.lang}>
      <article className="template-container">
        <div className="template-header">
          <h1 className="template-title">{course.frontmatter.title}</h1>
          <div className="template-meta">
            <span>{course.frontmatter.technologies.join(' • ')}</span>
          </div>
        </div>

        <div className="template-content">
          <main className="template-main">
            {image && (
              <div className="template-image">
                <GatsbyImage image={image} alt={course.frontmatter.title} />
              </div>
            )}
            <div className="template-links">
              {course.frontmatter.url && (
                <a
                  href={course.frontmatter.url}
                  className="template-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinksIcon className="icon" />
                  Live Demo
                </a>
              )}
            </div>
            <div className="article-content">
              <MDXProvider components={shortcodes}>{children}</MDXProvider>
            </div>
          </main>
          <aside className="template-sidebar">
            {tableOfContents.length > 0 && (
              <div className="table-of-contents">
                <h4>Contents</h4>
                <TableOfContents items={tableOfContents} />
              </div>
            )}
          </aside>
        </div>

        <nav className="template-navigation">
          {previous && (
            <Link
              to={`/courses/${previous.frontmatter.slug}`}
              className="template-nav-item prev"
              rel="prev"
            >
              <div className="template-nav-label">Previous Course</div>
              <div className="template-nav-title">{previous.frontmatter.title}</div>
            </Link>
          )}
          {!previous && <div className="template-nav-item prev disabled" aria-hidden="true"></div>}
          {next && (
            <Link
              to={`/courses/${next.frontmatter.slug}`}
              className="template-nav-item next"
              rel="next"
            >
              <div className="template-nav-label">Next Course</div>
              <div className="template-nav-title">{next.frontmatter.title}</div>
            </Link>
          )}
          {!next && <div className="template-nav-item next disabled" aria-hidden="true"></div>}
        </nav>
      </article>
    </Layout>
  )
}

export const Head = ({ data: { mdx: course } }: PageProps<CourseData>) => (
  <>
    <PageHead
      title={`${course.frontmatter.title} - Courses | Yuriy Mmalyi`}
      description={course.frontmatter.description}
      image={
        course.frontmatter.thumbnail
          ? `https://yuriymalyi.com/${course.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData?.images?.fallback?.src}`
          : undefined
      }
    />
    <meta name="keywords" content={course.frontmatter.technologies.join(', ')} />
    {course.frontmatter.url && <meta property="og:see_also" content={course.frontmatter.url} />}

  </>
)

export const query = graphql`
  query CourseBySlug($id: String!, $previousCourseId: String, $nextCourseId: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        technologies
        video
        paylink
        lang
        url
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 1200)
          }
        }
      }
      body
    }
    previous: mdx(id: { eq: $previousCourseId }) {
      frontmatter {
        title
        slug
      }
    }
    next: mdx(id: { eq: $nextCourseId }) {
      frontmatter {
        title
        slug
      }
    }
  }
`

export default CourseTemplate

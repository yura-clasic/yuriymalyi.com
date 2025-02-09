import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { PostNode, CourseNode, LanguageProps } from '../types'

export type ItemProps = { language: LanguageProps; type: 'post'; node: PostNode } | { language: LanguageProps; type: 'course'; node: CourseNode }

const Item = ({ language, type, node }: ItemProps) => {
  const isCourse = type === 'course'
  const isPost = type === 'post'

  const link = {
    en: {
      label: { course: 'View course', post: 'Read more' },
      link: { course: `/courses/${node.frontmatter.slug}`, post: `/posts/${node.frontmatter.slug}` }
    },
    ru: {
      label: { course: 'Посмотреть курс', post: 'Читать пост' },
      link: { course: `/ru/courses/${node.frontmatter.slug}`, post: `/ru/posts/${node.frontmatter.slug}` }
    },
    uk: {
      label: { course: 'Посмотреть курс', post: 'Читати далі' },
      link: { course: `/uk/courses/${node.frontmatter.slug}`, post: `/uk/posts/${node.frontmatter.slug}` }
    }
  }
  return (
    <div className="item">
      <div className="item-wrapper">
        <div className="item-block">
          <div className="item-card">
            <Link to={link[language].link[type]} className="item-card-link">
              {'thumbnail' in node.frontmatter && node.frontmatter.thumbnail && (
                <div className="thumbnail-wrapper asset">
                  <div className="thumbnail">
                    <GatsbyImage
                      image={getImage(node.frontmatter.thumbnail)!}
                      alt={node.frontmatter.title}
                      style={{ clipPath: 'inset(0.5px)' }}
                    />
                  </div>
                </div>
              )}

              <div className="item-card-body">
                <div className="item-card-content">
                  <div className="item-head">
                    <div className="item-card-title">
                      <span>{node.frontmatter.title}</span>
                    </div>
                  </div>
                  {isCourse && 'video' in node.frontmatter && node.frontmatter.video && (
                    <div className="item-video">Video</div>
                  )}
                  <div className="item-description">{node.frontmatter.description}</div>
                  {isPost && 'tags' in node.frontmatter && node.frontmatter.tags && (
                    <div className="item-tags">
                      {node.frontmatter.tags.map((tag: string) => (
                        <div className="item-tag" key={tag}>{tag}</div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="item-card-action">
                  <button
                    type="button"
                  >{link[language].label[type]}
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item

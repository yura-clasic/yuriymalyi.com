import type { IGatsbyImageData } from "gatsby-plugin-image"

export type LanguageProps = 'ru' | 'en' | 'uk'

export interface Post {
    title: string
    description?: string
    slug: string
    thumbnail: IGatsbyImageData
    // date: string
    tags: string[]
  }
  
  export interface Course {
    title: string
    description: string
    video?: boolean
    slug: string
    thumbnail: IGatsbyImageData
    technologies: string[]
    // date?: string
    position?: number
  }
  
  export interface PostNode {
    frontmatter: Post
  }
  
  export interface CourseNode {
    frontmatter: Course
  }
  
  export interface GraphQLEdge<T> {
    node: T
  }
  
  export interface GraphQLConnection<T> {
    edges: GraphQLEdge<T>[]
  }
  
  export interface IndexPageData {
    posts: GraphQLConnection<PostNode>
    courses: GraphQLConnection<CourseNode>
  }
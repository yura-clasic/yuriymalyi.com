import React from 'react'
// import { useSiteMetadata } from '../hooks/use-site-metadata'

interface PageHeadProps {
  title?: string
  description?: string
  pathname?: string
  children?: React.ReactNode
  image?: string
}

export const PageHead = ({ title, description, image, pathname, children }: PageHeadProps) => {

  return (
    <>
      <title>{title || 'Yuriy Malyi'}</title>
      <meta name="description" content={description || 'Personal website of Yuriy Malyi - Head of QA'} />

      <meta property="og:title" content={title || 'Yuriy Malyi'} />
      <meta property="og:description" content={description || 'Personal website of Yuriy Malyi - Head of QA'} />
      <meta property="og:url" content={`https://yuriymalyi.com${pathname || ''}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image || ''} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'Yuriy Malyi'} />
      <meta name="twitter:description" content={description || 'Personal website of Yuriy Malyi - Head of QA'} />
      <meta name="twitter:creator" content="@yuraclasic" />
      <meta name="twitter:image" content={image || ''} />

      <link rel="canonical" href={`https://yuriymalyi.com${pathname || ''}`} />
      <link rel="alternate" hrefLang="ru" href={`https://yuriymalyi.com${pathname || ''}`} />
      <link rel="alternate" hrefLang="uk" href={`https://yuriymalyi.com${pathname || ''}`} />
      {children}
    </>
  )
}

export default PageHead

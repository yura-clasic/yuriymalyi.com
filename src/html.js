import React from 'react'
import PropTypes from 'prop-types'
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <link
          key="favicon"
          rel="icon"
          type="image/png"
          href="/images/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          key="favicon-svg"
          rel="icon"
          type="image/svg+xml"
          href="/images/favicon/favicon.svg"
        />
        <link key="favicon-ico" rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link
          key="apple-touch-icon"
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link key="site-webmanifest" rel="manifest" href="/images/favicon/site.webmanifest" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}

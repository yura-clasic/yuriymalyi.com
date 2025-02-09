import React from 'react'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterXIcon } from '@remixicons/react/line'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <p>&copy; {new Date().getFullYear()} Yuriy Malyi. All rights reserved.</p>
        </div>
        <div className="links">
          <a
            title="GitHub"
            href="https://github.com/yura-clasic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon className="icon" />
          </a>
          <a
            title="LinkedIn"
            href="https://linkedin.com/in/yuriy-malyi-0a6b359/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="icon" />
          </a>
          <a
            title="Instagram"
            href="https://instagram.com/yura_clasic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon className="icon" />
          </a>
          <a
            title="Facebook"
            href="https://facebook.com/yuriy.malyi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon className="icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

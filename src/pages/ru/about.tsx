import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import PageHead from '../../components/page-head'
const AboutPage = () => {
  return (
    <Layout language="ru">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-container">
            <StaticImage
              src="../../images/profile-large.png"
              alt="Yuriy Malyi"
              className="rounded-lg"
              objectFit="cover"
              layout="fullWidth"
              placeholder="blurred"
            />
          </div>

          <div className="about-content">
            <h1 className="about-header">
              Меня зовут Yuriy Malyi
            </h1>
            <p className="about-text">
              More than 19 years experience in IT. Last 13 years QA Manager/CTO/Head of QA in international companies - Luxoft, Comodo, Ciklum, Kyivstar, Fondy, MagneticOne, MHP. Expert in effective process organization, audit, improvement and unification. Certified Scrum Master, mentor in Scrum/Agile methodologies implementation and effective reporting. 5 years experience in teaching of Manual QA courses at IAMPM, BeetRootAcademy and mentoring of junior QAs. Active speaker at QA/Agile/PM conferences.
            </p>

            <p className="about-text">
              Я люблю установку QA процессов.
            </p>

            <p className="about-text">
              На этой странице я делюсь моими проектами, идеями и забавными историями из мира IT. Давайте сделаем цифровый мир немного интереснее вместе!
            </p>

            <div className="about-skills">
              <h2 className="about-skills-title">Навыки</h2>
              <div className="skills-list">
                <div className="skill-item">Frontend: React, Next, Gatsby, Vue, Nuxt</div>
                <div className="skill-item">
                  Backend: Node.js, Express, NestJS, Ruby, Roda, Rust, Actix Web
                </div>
                <div className="skill-item">
                  Blockchain: Solidity, Web3.js, Solana, Truffle, Hardhat
                </div>
                <div className="skill-item">
                  DevOps: Docker, Kubernetes, GitHub Actions, GitLab CI, Terraform
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head = () => (
  <>
    <PageHead
      title="About Me | Yuriy Malyi"
      description="Learn more about Yuriy Malyi - Head of QA specializing in effective process implementation and Quality Assurance."
    />
  </>
)

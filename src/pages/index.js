import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Bio/about section</h1>
    <p>photo</p>

    <p>
      Self-learnt web developer with a number of solo and collaborative projects
      completed. From the North East, based in Newcastle. Spent 5 years living
      abroad in Japan. Enjoy tennis and live comedy!
    </p>

    <h2>Relevant social media profiles</h2>
    <ul>
      <li>Github</li>
      <li>Linkedin</li>
    </ul>

    <h2>Relevant skills</h2>
    <p>
      <p>Fullstack developer</p>
      <p>HTML5, CSS/SASS, JavaScript, React, Node, Express, Mongo</p>
    </p>
  </Layout>
)

export default IndexPage

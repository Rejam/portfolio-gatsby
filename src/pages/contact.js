import React from 'react'
import photo from '../images/me.png'
import cv from '../docs/RJamesCV.pdf'

export default () => {
  return (
    <section className="contact">
      <img src={photo} alt="" />
      <div className="details">
        <h1>Get in Touch</h1>
        <p>You can email me at rejames@gmail.com</p>
        <p>
          Or send me a message via{' '}
          <a href="https://www.linkedin.com/in/ryan-james-80123033/">
            LinkedIn
          </a>
        </p>
        <p>
          Download a copy of my CV:{' '}
          <a className="btn" href={cv} download="RyanJamesCV.pdf">
            <i className="fas fa-download" />
          </a>
        </p>
      </div>
    </section>
  )
}

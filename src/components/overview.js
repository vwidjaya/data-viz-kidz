import React from 'react'
import PropTypes from 'prop-types'

import headerImage from '../images/header.png'
import mockupContent from '../images/mockup-content.png'
import mockupFrame from '../images/mockup-frame.png'

const MockupCreative = () => (
  <div
    style={{
      margin: '1rem',
      position: 'relative',
      maxHeight: '50rem',
      overflow: 'hidden',
    }}
  >
    <div style={{ clipPath: 'inset(2% 5% round 2% 5%)' }}>
      <img
        src={`.${mockupContent}`}
        width="100%"
        alt="curriculum mockup, content"
      />
    </div>
    <div
      style={{
        position: 'absolute',
        width: '100%',
        top: 0,
      }}
    >
      <img
        src={`.${mockupFrame}`}
        width="100%"
        alt="curriculum mockup, frame"
      />
    </div>
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: 'calc(100% + 2rem)',
        top: 0,
        zIndex: 5,
        background: 'linear-gradient(to top, white 15%, transparent)',
      }}
    />
  </div>
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '4rem 1rem',
    }}
  >
    <div
      style={{
        backgroundImage: `url(.${headerImage})`,
        position: 'absolute',
        top: 0,
        zIndex: -5,
        height: '100vh',
        width: '100vw',
        opacity: 0.5,
      }}
    />

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: '300px',
          flexGrow: 1,
          padding: '1rem',
          textAlign: 'right',
        }}
      >
        <h3>{'The Problem'}</h3>
        <p>
          Data literacy has become an essential skill for everyone in today’s
          world. However, there is no current measure to equip teachers with the
          tools they need to educate data literacy to middle school students.
        </p>
      </div>

      <div style={{ maxWidth: '500px', flexBasis: '30vw', flexGrow: 2 }}>
        <MockupCreative />
      </div>

      <div
        style={{
          maxWidth: '300px',
          flexGrow: 1,
          padding: '1rem',
          textAlign: 'left',
        }}
      >
        <h3>{'Our Solution'}</h3>
        <p>
          Data Viz Kids provides an interactive and interdisciplinary curriculum
          for middle school teachers to educate and bring data literacy to
          classrooms.
        </p>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

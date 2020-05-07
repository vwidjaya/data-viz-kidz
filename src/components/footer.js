import React from 'react'
import PropTypes from 'prop-types'

import { COLORS } from '../styles/constants'

const Footer = () => (
  <footer
    style={{
      backgroundColor: COLORS.teal60,
    }}
  >
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem 2rem',
        fontSize: '.85rem',
        color: 'white',
      }}
    >
      <span style={{ marginLeft: '1rem', marginRight: '1rem' }}>
        Data Viz Kidz
      </span>
      <span style={{ marginLeft: '1rem', marginRight: '1rem' }}>
        UW iSchool Capstone 2020
      </span>
      <span style={{ marginLeft: '1rem', marginRight: '1rem' }}>
        Sponsored by Microsoft PowerBI
      </span>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

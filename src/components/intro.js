import React from 'react'
import PropTypes from 'prop-types'

import cover from '../images/cover.jpg'
import { COLORS } from '../styles/constants'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginRight: '-1rem',
      marginLeft: '-1rem',
      backgroundImage: `url(.${cover})`,
      backgroundPositionY: 'bottom',
      backgroundSize: 'cover',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        padding: '4rem 5%',
        minHeight: '30vh',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: COLORS.lightWhite,
      }}
    >
      <h1 style={{ textAlign: 'left' }}>Data skills for the youth.</h1>
      <p style={{ textAlign: 'left', maxWidth: 440 }}>
        According to IBM, 90% of the world’s data has been created in the last
        two years. However, our current education system fails to equip students
        with necessary data literacy skills...
      </p>
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

import React from 'react'
import { COLORS } from '../styles/constants'

const SectionHeader = ({ title, description }) => (
  <div style={{ marginBottom: '2rem' }}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '5rem',
      }}
    >
      <h1 style={{ margin: 0 }}>{title}</h1>
    </div>
    <p style={{ color: COLORS.mediumGray }}>{description}</p>
  </div>
)

export default SectionHeader

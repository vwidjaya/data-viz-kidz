import React from 'react'

import SectionHeader from './section-header'
import { COLORS } from '../styles/constants'

const AboutUs = () => (
  <div
    style={{
      padding: '4rem 1rem',
      textAlign: 'center',
      color: COLORS.teal,
    }}
  >
    <SectionHeader title="About Us" />
    <content
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 340px))',
        color: 'black',
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <div>
          <h3 style={{ marginBottom: '.5rem' }}>{'Aishwarya Manoharan'}</h3>
          <p style={{ color: COLORS.lightGray }}>Program Manager</p>
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <div>
          <h3 style={{ marginBottom: '.5rem' }}>{'Larissa Ho'}</h3>
          <p style={{ color: COLORS.lightGray }}>Research Lead</p>
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <div>
          <h3 style={{ marginBottom: '.5rem' }}>{'Vincent Widjaya'}</h3>
          <p style={{ color: COLORS.lightGray }}>Tech Lead</p>
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <div>
          <h3 style={{ marginBottom: '.5rem' }}>{'Jeeyoung Kim '}</h3>
          <p style={{ color: COLORS.lightGray }}>Education Content Lead</p>
        </div>
      </div>
    </content>
  </div>
)

export default AboutUs

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
        <h3 style={{ marginBottom: '.5rem' }}>{'Aishwarya Manoharan'}</h3>
        <p style={{ color: COLORS.lightGray, marginBottom: '.5rem' }}>
          Program Manager
        </p>
        <a
          href="mailto:maggie.tsang@microsoft.com"
          style={{ color: COLORS.teal }}
        >
          aishwm@uw.edu
        </a>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '.5rem' }}>{'Larissa Ho'}</h3>
        <p style={{ color: COLORS.lightGray, marginBottom: '.5rem' }}>
          Research Lead
        </p>
        <a
          href="mailto:maggie.tsang@microsoft.com"
          style={{ color: COLORS.teal }}
        >
          lho12@uw.edu
        </a>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '.5rem' }}>{'Vincent Widjaya'}</h3>
        <p style={{ color: COLORS.lightGray, marginBottom: '.5rem' }}>
          Tech Lead
        </p>
        <a
          href="mailto:maggie.tsang@microsoft.com"
          style={{ color: COLORS.teal }}
        >
          vwidjaya@uw.edu
        </a>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '.5rem' }}>{'Jeeyoung Kim '}</h3>
        <p style={{ color: COLORS.lightGray, marginBottom: '.5rem' }}>
          Education Content Lead
        </p>
        <a
          href="mailto:maggie.tsang@microsoft.com"
          style={{ color: COLORS.teal }}
        >
          mk0711@uw.edu
        </a>
      </div>
    </content>
    <hr style={{ margin: 'auto', maxWidth: '800px' }} />
    <div style={{ paddingTop: '2rem', color: 'black' }}>
      <p style={{ color: COLORS.lightGray }}>
        After June 2020, Data Viz Kids will no longer be maintaining this
        project. The data literacy curriculum will be continued by Microsoft's
        PowerBI team, with Maggie Tsang as their point of contact.
      </p>
      <h3 style={{ marginBottom: '.5rem' }}>{'Maggie Tsang'}</h3>
      <p style={{ color: COLORS.lightGray, marginBottom: '.5rem' }}>
        Program Manager
      </p>
      <a
        href="mailto:maggie.tsang@microsoft.com"
        style={{ color: COLORS.teal }}
      >
        maggie.tsang@microsoft.com
      </a>
    </div>
  </div>
)

export default AboutUs

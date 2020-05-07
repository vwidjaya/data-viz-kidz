import React from 'react'

import feature_obj from '../images/feature_obj.png'
import feature_indus from '../images/feature_indus.png'
import feature_intdis from '../images/feature_intdis.png'
import feature_stu from '../images/feature_stu.png'
import SectionHeader from './section-header'
import { COLORS } from '../styles/constants'

const Features = () => (
  <div
    style={{
      padding: '4rem 1rem',
      textAlign: 'center',
      backgroundColor: COLORS.teal,
      color: 'white',
      marginRight: '-1rem',
      marginLeft: '-1rem',
    }}
  >
    <SectionHeader title="Features" />
    <content
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 340px))',
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            backgroundColor: COLORS.cream,
            WebkitMaskImage: `url(${feature_obj})`,
            WebkitMaskSize: '100% 100%',
            height: '5rem',
            width: '5rem',
            margin: 'auto',
            marginBottom: '2rem',
          }}
        />
        <div>
          <h3>{'Clear Learning Objectives'}</h3>
          <p style={{ color: COLORS.lightWhite }}>
            Includes plugins for analytics, building sitemaps, and optimizing
            images
          </p>
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            backgroundColor: COLORS.cream,
            WebkitMaskImage: `url(${feature_indus})`,
            WebkitMaskSize: '100% 100%',
            height: '5rem',
            width: '5rem',
            margin: 'auto',
            marginBottom: '2rem',
          }}
        />
        <div>
          <h3>{'Relevant in Industry'}</h3>
          <p style={{ color: COLORS.lightWhite }}>
            Includes plugins for analytics, building sitemaps, and optimizing
            images
          </p>
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            backgroundColor: COLORS.cream,
            WebkitMaskImage: `url(${feature_intdis})`,
            WebkitMaskSize: '120% 100%',
            height: '5rem',
            width: '5rem',
            margin: 'auto',
            marginBottom: '2rem',
          }}
        />
        <div>
          <h3>{'Interdisciplinary'}</h3>
          <p style={{ color: COLORS.lightWhite }}>
            Includes plugins for analytics, building sitemaps, and optimizing
            images
          </p>
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            backgroundColor: COLORS.cream,
            WebkitMaskImage: `url(${feature_stu})`,
            WebkitMaskSize: '100% 100%',
            height: '5rem',
            width: '5rem',
            margin: 'auto',
            marginBottom: '2rem',
          }}
        />
        <div>
          <h3>{'Student-centered'}</h3>
          <p style={{ color: COLORS.lightWhite }}>
            Includes plugins for analytics, building sitemaps, and optimizing
            images
          </p>
        </div>
      </div>
    </content>
  </div>
)

export default Features

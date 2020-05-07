import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Intro from '../components/intro'
import Overview from '../components/overview'
import Features from '../components/features'
import AboutUs from '../components/about-us'

const IndexPage = () => (
  <Layout>
    <SEO />
    <Intro />
    <Overview />
    <Features />
    <AboutUs />
  </Layout>
)

export default IndexPage

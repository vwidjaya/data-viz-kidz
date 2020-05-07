module.exports = {
  siteMetadata: {
    title: `Data Viz Kidz`,
    description: `Landing page for our UW INFO Capstone Project`,
    author: `Data Viz Kidz (UW INFO Capstone 2020 AE-3)`,
    siteUrl: `https://vwidjaya.github.io/data-viz-kidz/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}

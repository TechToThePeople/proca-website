const path = require("path");

module.exports = {
  siteMetadata: {
    name: `ProCa`,
    title: `ProCa: Progressive Campaigning Tools as a Service`,
    description: `Petition widget for civil society and grassroot movements`,
    author: `@eucampaign`,
    logo : `logo.png`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-svgr-loader",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx','.md'],
        aaadefaultLayouts: { default: path.resolve('./src/components/layout.js') },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    //'gatsby-plugin-no-javascript' // <-- Here is the plugin, make sure it is included last in the plugins array
  ],
}

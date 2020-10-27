const course = require('./data/course.json');

module.exports = {
  pathPrefix: '/dislearning',
  siteMetadata: {
    title: course.title,
    description: course.description,
    authors: course.authors,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'units',
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-katex',
            options: {
              strict: 'ignore',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
          },
          {
            resolve: 'gatsby-remark-embedder',
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato',
            subsets: ['latin'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'DisLearning',
        short_name: 'DisLearning',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'fullscreen',
        icon: 'data/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};

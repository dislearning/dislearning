module.exports = {
  siteMetadata: {
    title: 'DisLearning',
    description:
      'Plataforma abierta para la creación de cursos mediante repositorios.',
    authors: ['santiagotrigoporres@gmail.com', 'jlopezcur@gmail.com'],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    // 'gatsby-transformer-yaml',
    // {
    //   resolve: 'gatsby-plugin-copy-files',
    //   options: {
    //     source: `${__dirname}/src/data/courses`,
    //     destination: '/courses'
    //   }
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'courses',
    //     ignore: [
    //       '**/*.md'
    //     ],
    //     path: `${__dirname}/src/data/courses/`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato',
            subsets: ['latin'],
          }
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
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};

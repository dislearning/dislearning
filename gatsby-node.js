const path = require('path');

// Create pages
// -----------------------------------------------------------------------------

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      units: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    data.units.edges.forEach(({ node }) =>
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve('./src/templates/Unit.jsx'),
        context: {
          slug: node.frontmatter.slug,
        },
      })
    );
  });
};

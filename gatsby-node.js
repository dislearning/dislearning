const path = require('path');
var CryptoJS = require('crypto-js');
const fetch = require('node-fetch');

// Source nodes
// -----------------------------------------------------------------------------

const courses = require('./src/data/courses.js');

const getCourseRoot = (url) => url.split('course.json')[0];
const getImageFullURI = (root, image) => `${root}${image}`;

const parseCourse = (data, url) => {
  const root = getCourseRoot(url);
  const image = getImageFullURI(root, data.image);
  const contentDigest = CryptoJS.MD5(JSON.stringify(data)).toString();
  return {
    url,
    root,
    slug: data.slug,
    title: data.title,
    repository: data.repository,
    level: data.level,
    categories: data.categories,
    tags: data.tags,
    image: image,
    stars: data.stars,
    toc: JSON.stringify(data.toc),

    id: data.slug,
    parent: null,
    children: [],
    internal: {
      type: 'Course',
      contentDigest,
      mediaType: 'text/json',
      content: JSON.stringify(data),
      description: 'Course',
    }
  };
};

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  const promises = [];
  courses.forEach(url => {
    promises.push(
      fetch(url).then(res => res.json()).then(data => {
        createNode(parseCourse(data, url));
      })
    );
  });
  return Promise.all(promises);
};

// Create pages
// -----------------------------------------------------------------------------

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allCourse {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(({ data }) => {
    data.allCourse.edges.forEach(({ node }) => createPage({
      path: `courses/${node.slug}`,
      component: path.resolve('./src/templates/course.js'),
      context: {
        slug: node.slug
      },
    }));
  });
};
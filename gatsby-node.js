const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allEvents {
          edges {
            node {
              titleslug
            }
          }
        }
      }
    `).then(result => {
      result.data.allEvents.edges.forEach(({ node }) => {
        createPage({
          path: node.titleslug,
          component: path.resolve(`./src/templates/past-talk.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            titleslug: node.titleslug,
          },
        })
      })
      resolve()
    })
  })
}

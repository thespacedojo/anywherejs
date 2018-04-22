module.exports = {
  siteMetadata: {
    name: 'AnywhereJS',
    tagline: 'The javascript meetup for the whole world'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Merriweather',
          'Cabin'
        ]
      }
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: 'https://api.graphcms.com/simple/v1/cjfzjecg0243h0156810h5co5',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MjM3MzM4NDgsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqZnpqZWNnMDI0M2gwMTU2ODEwaDVjbzUiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqZnpyc2kybzE3eWIwMTUycG5ucGxqd20ifQ.GKjEIGQUwk_qVE0hZi1iw4KtGJNOfnXfA8eJOjheR3I',
        query: `{
            allEvents {
              id
              title
              titleslug
              eventStart
              description
              nextEvent
              speaker {
                name
                avatar {
                  url
                }
              }
            }
        }`,
      },
    }
  ],
}

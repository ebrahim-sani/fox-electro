import { GraphQLClient, gql } from "graphql-request";

export const getPostings = async () => {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CD_SPACE}`;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.CD_TOKEN}`,
    },
  });

  const postQuery = gql`
    query {
      blogPostCollection {
        items {
          title
          slug
          image {
            url
          }
          content {
            json
          }
        }
      }
      bannerCollection {
        items {
          banner {
            url
          }
        }
      }
    }
  `;

  return graphQLClient.request(postQuery);
};

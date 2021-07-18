import { GraphQLClient, gql } from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CD_SPACE}`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.CD_TOKEN}`,
  },
});

export const getPostings = async () => {
  const getPostingsQuery = gql`
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
    }
  `;

  return await graphQLClient.request(getPostingsQuery);
};

export const getPosting = async (slug) => {
  const postQuery = gql`
    query getPosting($slug: String!) {
      blogPostCollection(where: { slug: $slug }) {
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

  return graphQLClient.request(postQuery, {
    slug,
  });
};

import { request, GraphQLClient, gql } from "graphql-request";

import Head from "next/head";
import { createClient } from "contentful";

import Banner from "../components/Banner";
import Header from "../components/Header";
import BlogFeed from "../components/BlogFeed";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className="">
      <Head>
        <title>Fox Electro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <Banner />
        {/* <BlogFeed posts={posts} /> */}
        {/* <h2>{posts.fields.title}</h2> */}

        {/* Footer */}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const endpoint =
    "https://api.contentful.com/content/v1/spaces/${process.env.CD_SPACE}";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: "Bearer ${process.env.CD_TOKEN}",
    },
  });

  const postQuery = gql`
    {
      postCollection {
        items {
          title
        }
      }
    }
  `;

  const posts = await graphQLClient.request(postQuery);
  console.log(JSON.stringify(data, undefined, 2));
  return {
    props: {
      posts,
    },
  };
}

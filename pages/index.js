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
        <BlogFeed />

        {/* Footer */}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID, // ID of a Compose-compatible space to be used \
    accessToken: process.env.ACCESS_TOKEN, // delivery API key for the space \
  });

  const posts = await client.getEntries({ content_type: "post" });
  return {
    props: {
      posts,
    },
  };
}

// export async function getServerSideProps(context) {
//   const posts = await fetch("https://cdn.contentful.com").then(
//     (res) => res.json
//   );

//   return {
//     props: {
//       posts,
//     },
//   };
// }

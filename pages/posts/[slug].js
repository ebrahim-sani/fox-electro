import { getPosting, getPostings } from "../../utils/contentful-helper";
import Head from "next/head";
import Header from "../../components/Header";

export const getStaticPaths = async () => {
  const data = await getPostings();

  return {
    fallback: false,
    paths: data.blogPostCollection.items.map((posting) => ({
      params: { slug: posting.slug },
    })),
  };
};

export const getStaticProps = async (context) => {
  const data = await getPosting(context.params.slug);
  console.log(data);
  return {
    props: {
      posts: data.blogPostCollection.items,
      // banners: post.bannerCollection.items,
    },
  };
};

export default function Posting({ posts, banners }) {
  console.log(posts);
  // console.log(banners);
  return (
    <div className="">
      <Head>
        <title>Fox Electro | content</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="bg-gray-100">
        {posts.map((post) => (
          <div>
            <h1>{post.title}</h1>
            <p>This is content!</p>
          </div>
        ))}
      </main>
    </div>
  );
}

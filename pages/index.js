import Head from "next/head";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Header from "../components/Header";
import BlogFeed from "../components/BlogFeed";
import Link from "next/link";
import { getPostings } from "../utils/contentful-helper";

export default function Home({ posts, banners }) {
  return (
    <div className="">
      <Head>
        <title>Fox Electro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="bg-gray-100">
        {/* <Banner banners={banners} /> */}
        <BlogFeed posts={posts} />
        <Footer />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const post = await getPostings();
  return {
    props: {
      posts: post.blogPostCollection.items,
      // banners: post.bannerCollection.items,
    },
  };
};

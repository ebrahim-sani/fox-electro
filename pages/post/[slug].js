import { getPostings } from "../../utils/contentful-helper";

export async function getStaticPaths() {
  const posts = await getPostings();

  return {
    paths: {
      params: posts.blogPostCollection.items.map((post) => ({
        slug: posts.slug,
      })),
    },

    fallback: false,
  };
}

export const getStaticProps = async () => {
  const post = await getPostings();
  return {
    props: {
      posts: post.blogPostCollection.items,
      banners: post.bannerCollection.items,
    },
  };
};

export default function Home({ posts, banners }) {
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
        <p>This is content!</p>
      </main>
    </div>
  );
}

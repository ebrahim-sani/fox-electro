import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Fox Electro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Blog/Feed */}

      {/* Footer */}

      <h1>The Cityzens</h1>
    </div>
  );
}

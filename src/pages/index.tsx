import type { NextPage } from "next";
import Head from "next/head";

import HomePage from "../components/HomePage/HomePage";

const Home: NextPage = () => (
  <>
    <Head>
      <title>React Exercise</title>
      <meta name="description" content="Exercise to flex your react muscles" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HomePage />
  </>
);

export default Home;

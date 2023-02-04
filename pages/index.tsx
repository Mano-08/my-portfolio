import Head from "next/head";
import HomePage from "@/components/home/HomePage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="my creative portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Home</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;

// Page
import { Overview, MealHistory } from "@/components/top-page";

// Head
import Head from "next/head";

const Home = () => {
  return (
    <>
    <Head>
        <title>Top Page</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Top Page" />
        <meta
          property="og:description"
          content="Top Page"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/p42DNS6/Web-1280-top-my-Page.png"
        />
      </Head>
      <Overview />
      <MealHistory />
    </>
  );
};

export default Home;

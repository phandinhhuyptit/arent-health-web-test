import Container from "@/layouts/container";
// Page
import { Articles, RecommendSelections } from "@/components/column-page";

// Head
import Head from "next/head";

const ColumnPage = () => {
  return (
    <>
      <Head>
        <title>Column Page</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Column Page" />
        <meta property="og:description" content="Column Page" />
        <meta
          property="og:image"
          content="https://i.ibb.co/HKjMvrS/Web-1280-Column.png"
        />
      </Head>
      <Container customStyles="md:h-[84vh] md:table">
        <RecommendSelections />
        <Articles />
      </Container>
    </>
  );
};

export default ColumnPage;

// Layout
import Container from "@/layouts/container";

// Page
import {
  BodyRecordGraph,
  Diary,
  Entries,
  ExerciseRecord,
} from "@/components/record-page";

// Head
import Head from "next/head";

const RecordPage = () => {
  return (
    <>
     <Head>
        <title>My Record</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="My record" />
        <meta
          property="og:description"
          content="My record"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/fdkYm5z/Web-1280-my-Record.png"
        />
      </Head>
      <Container>
      <Entries />
      <BodyRecordGraph />
      <ExerciseRecord />
      <Diary />
    </Container>
    </>
    
  );
};

export default RecordPage;

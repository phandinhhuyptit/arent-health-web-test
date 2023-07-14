import Container from "@/layouts/container";
import {
  BodyRecordGraph,
  Diary,
  Entries,
  ExerciseRecord,
} from "@/components/record-page";

const RecordPage = () => {
  return (
    <Container>
      <Entries />
      <BodyRecordGraph />
      <ExerciseRecord />
      <Diary />
    </Container>
  );
};

export default RecordPage;

import Container from "@/layouts/container";
import Articles from "@/components/column-page/articles";
import RecommendSelections from "@/components/column-page/recommend-selections";

const ColumnPage = () => {
  return (
    <Container customStyles="md:h-[84vh] md:table">
      <RecommendSelections />
      <Articles />
    </Container>
  );
};

export default ColumnPage;

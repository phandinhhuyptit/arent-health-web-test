// I did not have time to write all the test cases for all components
// But here's an example:

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RecommendSelections, {
  RecommendationCard,
} from "../column-page/recommend-selections";

describe("RecommendationCard", () => {
  test("renders with the given text content", () => {
    const texts = { en: "Test Title", jp: "テスト" };
    const { getByText } = render(<RecommendationCard texts={texts} />);

    const enText = getByText(texts.en);
    const jpText = getByText(texts.jp);

    expect(enText).toBeDefined();
    expect(jpText).toBeDefined();
  });
});

describe("RecommendSelections", () => {
  test("renders four RecommendationCard components with the correct text content", () => {
    const { getByText } = render(<RecommendSelections />);

    const recommendedColumn = getByText("RECOMMENDED COLUMN");
    const recommendedDiet = getByText("RECOMMENDED DIET");
    const recommendedBeauty = getByText("RECOMMENDED BEAUTY");
    const recommendedHealth = getByText("RECOMMENDED HEALTH");

    expect(recommendedColumn).toBeDefined();
    expect(recommendedDiet).toBeDefined();
    expect(recommendedBeauty).toBeDefined();
    expect(recommendedHealth).toBeDefined();
  });
});

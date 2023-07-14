interface RecommendationCard {
  texts: {
    en: string;
    jp: string;
  };
}

export const RecommendationCard = ({ texts }: RecommendationCard) => {
  return (
    <div className="w-[275px] sm:w-[calc(50%-2rem)] md:w-[calc(25%-1.5rem)] h-36 bg-dark-600 flex flex-col justify-center items-center">
      <div className="text-center space-y-2">
        <h3 className="text-primary-300 text-[22px] font-light tracking-wider">
          {texts.en}
        </h3>
        <hr className="w-14 mx-auto" />
        <h3 className="text-light-100 !m-0">{texts.jp}</h3>
      </div>
    </div>
  );
};

const RecommendSelections = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-8 mt-14">
      {/* COLUMN */}
      <RecommendationCard
        texts={{ en: "RECOMMENDED COLUMN", jp: "オススメ" }}
      />
      {/* DIET */}
      <RecommendationCard
        texts={{ en: "RECOMMENDED DIET", jp: "ダイエット" }}
      />
      {/* BEAUTY */}
      <RecommendationCard texts={{ en: "RECOMMENDED BEAUTY", jp: "美容" }} />
      {/* HEALTH */}
      <RecommendationCard texts={{ en: "RECOMMENDED HEALTH", jp: "健康" }} />
    </div>
  );
};

export default RecommendSelections;

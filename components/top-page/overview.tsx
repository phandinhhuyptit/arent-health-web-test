import React from "react"
import { MealImages } from "@/public/images";
import Image from "next/image";

// Hook
import { useFetchAchievementRate, useFetchGraphData } from "@/hooks";

// Components
import { LineChartOverview, LoadingSpinner } from "@/shared";

interface Props {
  loading:boolean
  date:string
  progress: number

}
const CircularProgress: React.FC<Props> = ({ loading, date, progress }: any) => {
  const displayDate = date || "";
  const displayProgress = progress ? Math.round(progress * 100) : "";

  return (
    <div className="progress-item">
      {loading ? (
        <LoadingSpinner color="white"/>
      ) : (
        <>
          {" "}
          <span>
            <small>{displayDate}</small> {displayProgress}%
          </span>
          <svg className="circular-chart white" viewBox="0 0 36 36">
            <path
              d="M18 2.08a15.92 15.92 0 0 1 0 31.84 15.92 15.92 0 0 1 0-31.84"
              className="circle-bg"
            ></path>
            <path
              d="M18 2.08a15.92 15.92 0 0 1 0 31.84 15.92 15.92 0 0 1 0-31.84"
              className="circle"
              stroke-dasharray="75, 100"
            ></path>
            <text x="18" y="20.35" className="percentage">
              75%
            </text>
          </svg>
        </>
      )}
    </div>
  );
};

const Overview = () => {
  const { loading: graphDataLoading, graphData } = useFetchGraphData();
  const { loading: achievementLoading, achievementRate } =
    useFetchAchievementRate();

  return (
    <section>
      <div className="flex flex-wrap lg:flex-row">
        <div className="w-full h-[350px] lg:h-[auto] lg:w-[45%] flex items-center overflow-hidden relative justify-center sm:pt-[26px] sm:pb-[26px]">
          <div className="lg:absolute sm:w-full bg-gradient-to-br from-yellow-300/10 to-yellow-500/30 saturate-150 brightness-100">
            <Image
              className="h-full w-full object-cover mix-blend-soft-light"
              src={MealImages.mealImg1}
              alt="Achievement rate bg"
            />
            <CircularProgress
              loading={achievementLoading}
              date={achievementRate?.date as string}
              progress={achievementRate?.percentage as number}
            />
          </div>
        </div>
        <div className="bg-dark-600 w-full lg:w-[55%] px-8 flex justify-center items-center sm:h-[400px]">
          {graphDataLoading ? (
            <LoadingSpinner color="white" />
          ) : (
            <LineChartOverview
              data={graphData}
              width={"95%"}
              height={400}
              colors={["#5F5F5F", "#FFCC21", "#6CC4AC"]}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Overview;

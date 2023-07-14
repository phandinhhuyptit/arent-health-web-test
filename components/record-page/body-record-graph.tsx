import { useState } from "react";
import clsx from "clsx";
// Chart
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  Line,
} from "recharts";

// Hooks
import useFetchGraphData, { ChartType } from "@/hooks/useFetchGraphData";

// Components
import LoadingSpinner from "@/shared/loading-spinner";

const BodyRecordGraph = () => {
  const { loading, graphData, refetch } = useFetchGraphData();
  const [chartMode, setChartMode] = useState<ChartType>("year");

  const onChartMode = (type: ChartType) => {
    setChartMode(type);
    refetch(type);
  };

  return (
    <div className="px-[30px] w-full py-4 mt-16 bg-dark-500 font-light">
      {/* Graph Title */}
      <div className="text-light-100">
        <div className="flex w-48 justify-between mb-2 mx-8">
          <h3 className="w-[2ch] text-[15px]">BODY RECORD</h3>
          <h3 className="text-xl">2021.05.21</h3>
        </div>
      </div>
      {loading ? (
        <LoadingSpinner color="white" />
      ) : (
        <>
          {/* Graph */}
          <div className="w-full bg-dark-500 flex justify-center items-center">
            <ResponsiveContainer height={200}>
              <LineChart data={graphData}>
                <XAxis
                  axisLine={false}
                  dataKey="name"
                  tick={{ fill: "white" }}
                />
                <CartesianGrid
                  horizontal={false}
                  strokeDasharray="0"
                  stroke={"#5F5F5F"}
                />
                <Tooltip />

                <Line
                  type="linear"
                  dataKey="c1"
                  stroke={"#FFCC21"}
                  activeDot={{ r: 4 }}
                  strokeWidth={4}
                />
                <Line
                  type="linear"
                  dataKey="c2"
                  strokeWidth={4}
                  stroke={"#6CC4AC"}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Graph buttons */}
          <div className="text-primary-300 flex gap-2 xs:gap-4 flex-wrap">
            <button
              onClick={() => onChartMode("day")}
              className={clsx(
                "bg-white h-6 w-14 rounded-3xl",
                chartMode === "day" && "!bg-primary-300 text-light-100"
              )}
            >
              日
            </button>
            <button
              onClick={() => onChartMode("week")}
              className={clsx(
                "bg-white h-6 w-14 rounded-3xl",
                chartMode === "week" && "!bg-primary-300 text-light-100"
              )}
            >
              週
            </button>
            <button
              onClick={() => onChartMode("month")}
              className={clsx(
                "bg-white h-6 w-14 rounded-3xl",
                chartMode === "month" && "!bg-primary-300 text-light-100"
              )}
            >
              月
            </button>
            <button
              onClick={() => onChartMode("year")}
              className={clsx(
                "bg-white h-6 w-14 rounded-3xl ",
                chartMode === "year" && "!bg-primary-300 text-light-100"
              )}
            >
              年
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BodyRecordGraph;

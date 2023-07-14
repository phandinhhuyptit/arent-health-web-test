import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  Line,
} from "recharts";

interface DataPoint {
  x: number;
  y: number;
}

interface LineChartProps {
  data: any[];
  width: string | number;
  height: number | string;
  colors: string[];
}

const LineChartOverview = ({
  data,
  width,
  height,
  colors,
}: LineChartProps) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={data}>
        <XAxis axisLine={false} dataKey="name" tick={{ fill: "white" }} />
        <CartesianGrid
          horizontal={false}
          strokeDasharray="0"
          stroke={colors[0]}
        />
        <Tooltip />

        <Line
          type="linear"
          dataKey="c1"
          stroke={colors[1]}
          activeDot={{ r: 4 }}
          strokeWidth={4}
        />
        <Line
          type="monotone"
          dataKey="c2"
          strokeWidth={4}
          stroke={colors[2]}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartOverview;

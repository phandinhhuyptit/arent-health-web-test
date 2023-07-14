import { useState, useEffect } from "react";
import API from "@/services/api-frontend";
import { dataUtils } from "@/utils/utils-data";

export type ChartType = "day" | "week" | "month" | "year";


const useFetchGraphData = () => {
  const [graphData, setGraphData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  
  useEffect(() => {
    const fetchGraphDataAPI = async () => {
      try {
        const data = await API.getGraphData();
        setGraphData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGraphDataAPI();
  }, []);

  const refetch = (type: ChartType ) => {
    setGraphData(
      graphData.map((d: any) => {
        const newD = {
          ...d,
          c1: dataUtils.randomIntFromInterval(500, 3000),
          c2: dataUtils.randomIntFromInterval(500, 3000),
          c3: dataUtils.randomIntFromInterval(500, 4000),
        };
        return newD;
      })
    );  
  } 



  return { graphData, loading ,refetch };
};

export default useFetchGraphData;

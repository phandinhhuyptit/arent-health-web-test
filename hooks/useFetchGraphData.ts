import { useState, useEffect } from "react";
import API from "@/services/api-frontend";

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

  return { graphData, loading  };
};

export default useFetchGraphData;

import { useState, useEffect } from "react";
import { AchievementRate } from "@/types/data.types";
import API from "@/services/api-frontend";

const useFetchAchievementRate = () => {
  const [achievementRate, setAchievementRate] =
    useState<AchievementRate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAchievementRateAPI = async () => {
      try {
        const data = await API.getAchievementRate();
        setAchievementRate(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAchievementRateAPI();
  }, []);

  return { achievementRate, loading };
};

export default useFetchAchievementRate;

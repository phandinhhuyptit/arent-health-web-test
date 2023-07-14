import { useState, useEffect } from "react";
import { Meal } from "@/types/data.types";
import API from "@/api/services/api-frontend";
import { v4 as uuidv4 } from 'uuid';
const useFetchMealHistory = () => {
  const [mealList, setMealList] = useState<Meal[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMealHistoryAPI = async () => {
      try {
        const data = await API.getMealHistory();
        setMealList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMealHistoryAPI();
  }, []);

  const loadMore = async () => {
    setLoading(true);
    try {
      const data = await API.getMealHistory();
      const updatedData =data && data.map((item)=>{
        return {...item,id : uuidv4()}
      })
      setMealList((prev) => {
        if (prev && updatedData) {
          return [...prev, ...updatedData];
        }
        return prev;
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { mealList, loading, loadMore };
};

export default useFetchMealHistory;

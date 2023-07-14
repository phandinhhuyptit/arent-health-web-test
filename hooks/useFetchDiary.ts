import { useState, useEffect } from "react";
import { Diary } from "@/types/data.types";
import API from "@/api/services/api-frontend";
import { v4 as uuidv4 } from 'uuid';

const useFetchDiary = () => {
  const [diaryList, setDiaryList] = useState<Diary[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDiaryAPI = async () => {
      try {
        const data = await API.getDiary();
        setDiaryList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDiaryAPI();
  }, []);

  const loadMore = async () => {
    setLoading(true);
    try {
      const data = await API.getDiary();
      const updatedData =
        data &&
        data.map((item) => {
          return { ...item, id: uuidv4() };
        });
      setDiaryList((prev) => {
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

  return { diaryList, loading, loadMore };
};

export default useFetchDiary;

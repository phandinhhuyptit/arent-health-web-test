import { useState, useEffect } from "react";
import { Exercise } from "@/types/data.types";
import API from "@/api/services/api-frontend";

const usefetchExercises = () => {
  const [exerciseList, setExerciseList] = useState<Exercise[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchExercisesAPI = async () => {
      try {
        const data = await API.getExercises();
        setExerciseList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercisesAPI();
  }, []);

  return { exerciseList, loading };
};

export default usefetchExercises;

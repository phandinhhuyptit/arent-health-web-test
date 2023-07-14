import {
  achievementRate,
  mealList,
  diaryList,
  articleList,
  exerciseList,
  graphData,
} from "@/api/mockData";

// Types
import { AchievementRate, Meal, Diary, Article, Exercise } from "@/types/data.types";
import {IAPI} from '@/types/api.types';


export const FAKE_DELAY_IN_MS = 1000;
export const FAKE_NORMAL_DELAY_IN_MS = 2000;
export const FAKE_SLOW_DELAY_IN_MS = 3000;

class ApiFrontend extends IAPI {
  async getMealHistory (): Promise<Meal[] | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mealList);
      }, FAKE_NORMAL_DELAY_IN_MS);
    });
  };
  
  async getAchievementRate(): Promise<AchievementRate | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(achievementRate);
      }, FAKE_DELAY_IN_MS);
    });
  }
  async getDiary(): Promise<Diary[] | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(diaryList);
      }, FAKE_SLOW_DELAY_IN_MS);
    });
  };
  async getExercises (): Promise<Exercise[] | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(exerciseList);
      }, FAKE_SLOW_DELAY_IN_MS);
    });
  };
  async getGraphData (): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(graphData);
      }, FAKE_DELAY_IN_MS);
    });
  };
  async getArticles(): Promise<Article[] | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(articleList);
      }, FAKE_DELAY_IN_MS);
    });
  };
}

export default new ApiFrontend();

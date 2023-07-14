import { AchievementRate, Meal, Diary, Article, Exercise } from "@/types/data.types";

export abstract class IAPI {
    abstract getMealHistory() : Promise<Meal[] | null>
    abstract getAchievementRate() : Promise<AchievementRate | null>
    abstract getDiary(): Promise<Diary[] | null>
    abstract getExercises(): Promise<Exercise[] | null>
    abstract getGraphData(): Promise<any>
    abstract getArticles(): Promise<Article[] | null>

}
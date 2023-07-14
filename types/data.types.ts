export enum MealType {
    MORNING = "Morning",
    LUNCH = "Lunch",
    DINNER = "Dinner",
    SNACK = "Snack",
  }
  
  export interface AchievementRate {
    date: string;
    percentage: number;
  }
  
  export interface Meal {
    id: string;
    time: {
      date: number;
      month: number;
    };
    type: MealType;
    image: any;
  }
  
  export interface Diary {
    id: string;
    date: string;
    time: string;
    contentIntro: string;
    content: string;
  }
  
  export interface Exercise {
    id: string;
    title: string;
    energy: {
      amount: number;
      unit: string;
    };
    duration: {
      amount: number;
      unit: string;
    };
  }
  
  export interface Article {
    id: string;
    date: string;
    time: string;
    image: any;
    title: string;
    hashtags: string[];
  }
  
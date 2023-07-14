import { MealImages } from "@/public/images";
import { MealType } from "@/types/data.types";
import { v4 as uuidv4 } from 'uuid';

export const mealList = [
  {
    id: uuidv4(),
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: MealImages.mealImg1,
  },
  {
    id: uuidv4(),
    time: {
      date: 11,
      month: 5,
    },
    type: MealType.LUNCH,
    image: MealImages.mealImg2,
  },
  {
    id: uuidv4(),
    time: {
      date: 12,
      month: 5,
    },
    type: MealType.MORNING,
    image: MealImages.mealImg3,
  },
  {
    id: uuidv4(),
    time: {
      date: 11,
      month: 5,
    },
    type: MealType.DINNER,
    image: MealImages.mealImg4,
  },
  {
    id: uuidv4(),
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.DINNER,
    image: MealImages.mealImg5,
  },
  {
    id: uuidv4(),
    time: {
      date: 14,
      month: 5,
    },
    type: MealType.LUNCH,
    image: MealImages.mealImg6,
  },
  {
    id: uuidv4(),
    time: {
      date: 17,
      month: 5,
    },
    type: MealType.MORNING,
    image: MealImages.mealImg7,
  },
  {
    id: uuidv4(),
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: MealImages.mealImg8,
  },
  {
    id: uuidv4(),
    time: {
      date: 2,
      month: 5,
    },
    type: MealType.MORNING,
    image: MealImages.mealImg7,
  },
  {
    id: uuidv4(),
    time: {
      date: 4,
      month: 5,
    },
    type: MealType.MORNING,
    image: MealImages.mealImg4,
  },
  {
    id: uuidv4(),
    time: {
      date: 5,
      month: 5,
    },
    type: MealType.MORNING,
    image: MealImages.mealImg2,
  },
  {
    id: uuidv4(),
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: MealImages.mealImg1,
  },
  {
    id: uuidv4(),
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.SNACK,
    image: MealImages.mealImg2,
  },
  {
    id: uuidv4(),
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.SNACK,
    image: MealImages.mealImg1,
  },
  {
    id: uuidv4(),
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.DINNER,
    image: MealImages.mealImg2,
  },
  {
    id: uuidv4(),
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.DINNER,
    image: MealImages.mealImg1,
  },
  {
    id: uuidv4(),
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.SNACK,
    image: MealImages.mealImg6,
  },
];

import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

// Icons
import { Icons } from "@/public/icons";

//Hooks
import useFetchMealHistory from "@/hooks/useFetchMealHistory";

//Components / Layout
import { Container } from "@/layouts";

import { SeeMoreButton, LoadingSpinner } from "@/shared";

// Utils
import { formateDateMonth } from "@/utils/data-time";
import { Meal } from "@/types/data.types";

type TagType = "Morning" | "Lunch" | "Dinner" | "Snack" | "";
interface Props {
  filter: TagType;
  setFilter: React.Dispatch<React.SetStateAction<TagType>>;
}

const FilterButtons: React.FC<Props> = ({ setFilter, filter }) => {
  const brightness = "brightness-95 hover:brightness-[1.16]";
  const grayscale = "grayscale";
  return (
    <div className="flex flex-wrap justify-center gap-16">
      <Image
        className={clsx(
          filter === "Morning" || filter === "" ? brightness : grayscale,
          "transition duration-200 ease-in-out filter  hover:cursor-pointer"
        )}
        src={Icons.morningHex}
        alt="morning-hex"
        onClick={() => {
          if (filter === "Morning") return setFilter("");
          setFilter("Morning");
        }}
      />
      <Image
        className={clsx(
          filter === "Lunch" || filter === "" ? brightness : grayscale,
          "transition duration-200 ease-in-out filter  hover:cursor-pointer"
        )}
        src={Icons.lunchHex}
        alt="lunch-hex"
        onClick={() => {
          if (filter === "Lunch") return setFilter("");
          setFilter("Lunch");
        }}
      />
      <Image
        className={clsx(
          filter === "Dinner" || filter === "" ? brightness : grayscale,
          "transition duration-200 ease-in-out filter  hover:cursor-pointer"
        )}
        src={Icons.dinnerHex}
        alt="dinner-hex"
        onClick={() => {
          if (filter === "Dinner") return setFilter("");
          setFilter("Dinner");
        }}
      />
      <Image
        className={clsx(
          filter === "Snack" || filter === "" ? brightness : grayscale,
          "transition duration-200 ease-in-out filter  hover:cursor-pointer"
        )}
        src={Icons.snackHex}
        alt="snack-hex"
        onClick={() => {
          if (filter === "Snack") return setFilter("");
          setFilter("Snack");
        }}
      />
    </div>
  );
};

interface MealCardProps {
  image: any;
  date: number;
  month: number;
  type: string;
}

const MealCard = ({ image, date, month, type }: MealCardProps) => {
  return (
    <div className="relative  md:w-[calc(25%-0.5rem)]">
      <Image
        className="w-[14.625rem] aspect-square object-cover"
        src={image}
        alt="meal"
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-8 bg-primary-300 flex justify-center items-center
  text-light-100 font-light text-[0.9rem]"
      >
        {formateDateMonth(date, month)}.{type}
      </div>
    </div>
  );
};

const MealHistory = () => {
  const { mealList, loading, loadMore } = useFetchMealHistory();
  const [filter, setFilter] = useState<TagType>("");
  const [filteredMealList, setFilteredMealList] = useState<Meal[] | null>(
    mealList
  );
  useEffect(() => {
    if (filter === "" && mealList?.length) {
      setFilteredMealList(mealList);
    }
    if (filter !== "" && mealList?.length) {
      const filteredMealList = mealList
        ? mealList.filter((meal) => meal.type === filter)
        : [];
      setFilteredMealList(filteredMealList);
    }
  }, [filter, mealList]);

  return (
    <Container customStyles="xl:min-h-[700px]">
      <div className="mt-8 mb-16 space-y-6">
        <FilterButtons filter={filter} setFilter={setFilter} />
        <div className="flex flex-wrap justify-center md:justify-stretch gap-2">
          {loading && !mealList ? (
            <LoadingSpinner />
          ) : (
            filteredMealList?.map((meal) => {
              if (!meal) return <></>;

              return (
                <MealCard
                  key={meal.id}
                  image={meal.image}
                  date={meal.time.date}
                  month={meal.time.month}
                  type={meal.type}
                />
              );
            })
          )}
        </div>
        {mealList && mealList.length >= 8 && (
          <SeeMoreButton
            loading={loading}
            loadMore={loadMore}
            text={"記録をもっと見る"}
          />
        )}
      </div>
    </Container>
  );
};

export default MealHistory;

import { ClipLoader } from "react-spinners";
import React from "react";
import clsx from "clsx";
interface Props {
  color?: string;
  size?: number;
  className?: string;
}

const LoadingSpinner: React.FC<Props> = ({
  color = "black",
  size = 60,
  className,
}) => {
  return (
    <div className={clsx("w-max mx-auto py-[10%]", className ? className : "")}>
      <ClipLoader color={color} size={size} />
    </div>
  );
};

export default LoadingSpinner;

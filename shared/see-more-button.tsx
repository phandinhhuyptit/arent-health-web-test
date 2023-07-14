import React from "react"
import { LoadingSpinner } from "@/shared";
interface Props {
  text: string,
  loadMore?: ()=>void,
  loading?: boolean
}
const SeeMoreButton: React.FC<Props> = ({ text,loadMore,loading }) => {
    
    return (
      <div className="mx-auto w-max mt-4">
        <button
          disabled={loading}
          onClick={loadMore}
          // special linear gradient
          style={{
            background:
              "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
          }}
          className="h-14 w-[18.5rem] bg-black text-light-100 font-light rounded mx-auto flex items-center justify-center gap-2"
        >
          
          {loading && <LoadingSpinner color="white" size={20} className="mx-0 pt-1 pb-0"/>}
          {text}
        </button>
      </div>
    );
  };
  
  export default SeeMoreButton;
  
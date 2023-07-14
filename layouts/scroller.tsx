import { Icons } from "@/public/icons";
import Image from "next/image";

const Scroller = () => {
  const onScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button aria-label="scroller" className="hidden xl:block" onClick={onScroll}>
      <Image
        className="fixed top-3/4 xl:right-36"
        src={Icons.scroll}
        alt="scroll"
      />
    </button>
  );
};

export default Scroller;

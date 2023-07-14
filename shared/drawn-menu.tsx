import { LegacyRef, forwardRef } from "react"
import Link from "next/link";
import { PATHS } from "@/config/paths";

const menus = [
  {
    name: "自分の記録",
    link: PATHS.record,
  },
  {
    name: "体重グラフ",
    link: PATHS.top,
  },
  {
    name: "目標",
    link: PATHS.top,
  },
  {
    name: "選択中のコース",
    link: PATHS.top,
  },
  {
    name: "コラム一覧",
    link: PATHS.column,
  },
  {
    name: "設定",
    link: PATHS.top,
  },
];

const Menu = ({
  name,
  link,
  setDrawnMenuOpen,
}: {
  name: string;
  link: string;
  setDrawnMenuOpen: Function;
}) => {
  return (
    <Link href={link} onClick={() => setDrawnMenuOpen(false)}>
      <div
        className="w-72 h-16 py-5 px-8 bg-gray-400 border-b-[0.05px] border-[#2E2E2E50]
        text-lg text-light-100 font-light hover:bg-gray-500"
      >
        {name}
      </div>
    </Link>
  );
};

const DrawnMenu = forwardRef(({ setDrawnMenuOpen }: { setDrawnMenuOpen: Function },ref : LegacyRef<HTMLElement>) => {
  return (
    <nav ref={ref} className="absolute w-max flex flex-col top-8 right-[calc(100%-2rem)] z-50">
      {menus.map((menu) => (
        <Menu
          key={menu.name}
          name={menu.name}
          link={menu.link}
          setDrawnMenuOpen={setDrawnMenuOpen}
        />
      ))}
    </nav>
  );
});

export default DrawnMenu;

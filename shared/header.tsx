import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

// Icons,Logo
import { Icons } from "@/public/icons";
import Logo from "@/public/logos/header-logo.png";

// Components
import { DrawnMenu } from "@/shared";

// Layout
import { Container } from "@/layouts";

// Config
import { PATHS } from "@/config/paths";

// Hooks
import { useOnClickOutside } from "usehooks-ts";

const Navbar = () => {
  const router = useRouter();
  const [drawnMenuOpen, setDrawnMenuOpen] = useState(false);
  const navRef = useRef(null);

  useOnClickOutside(navRef, () => {
    setDrawnMenuOpen(false);
  });
  return (
    <section className="bg-dark-500 sticky top-0 z-50">
      <Container>
        <nav className="flex justify-between h-16 items-center text-base text-light-100 font-light">
          {/* Logo */}
          <div className="mt-2">
            <Link href={PATHS.top}>
              <Image
                className="w-[140px] h-[60px] object-contain"
                height={60}
                width={140}
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>

          {/* Menu Items */}
          <ul className="flex gap-2 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-12">
            {/* My Record */}
            <Link href={PATHS.record}>
              <li className="flex gap-2 items-center">
                <Image height={32} src={Icons.iconMemo} alt="icon-memo" />
                <span
                  className={`hidden sm:block hover:text-primary-400
                  ${
                    router.pathname === PATHS.record ? "text-primary-400" : ""
                  }`}
                >
                  自分の記録
                </span>
              </li>
            </Link>

            {/* Challenge */}
            <li className="flex gap-2 items-center">
              <Image
                className="cursor-pointer"
                height={32}
                src={Icons.iconChallenge}
                alt="icon-challenge"
              />
              <span className="cursor-pointer hover:text-primary-400 hidden sm:block">
                チャレンジ
              </span>
            </li>

            {/* Notification */}
            <li className="flex gap-2 items-center ">
              <div className="relative">
                <Image className="cursor-pointer" height={32} src={Icons.iconInfo} alt="icon-info" />
                <div className="absolute top-0 left-6 bg-primary-500 w-4 h-4 text-light-100 text-[10px] rounded-full flex items-center justify-center">
                  1
                </div>
              </div>
              <span className="cursor-pointer hidden sm:block hover:text-primary-400">
                お知らせ
              </span>
            </li>

            {/* Drawn Menu */}
            <li ref={navRef}>
              {drawnMenuOpen && (
                <div className="relative">
                  <DrawnMenu setDrawnMenuOpen={setDrawnMenuOpen} />
                </div>
              )}
              <Image
                className="hover:cursor-pointer"
                height={32}
                src={drawnMenuOpen ? Icons.iconClose : Icons.iconMenu}
                alt="icon-menu"
                onClick={() => setDrawnMenuOpen(!drawnMenuOpen)}
              />
            </li>
          </ul>
        </nav>
      </Container>
    </section>
  );
};

export default Navbar;

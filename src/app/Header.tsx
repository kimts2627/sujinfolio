"use client";

import { useRouter } from "next/navigation";
import { RxInstagramLogo } from "react-icons/rx";
import { LiaArtstation } from "react-icons/lia";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const navigations = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
  ];

  const socialNetworks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/zimi_ss",
      element: <RxInstagramLogo />,
    },
    {
      name: "Artstation",
      href: "https://www.artstation.com/mumu00",
      element: <LiaArtstation />,
    },
  ];

  const handleNavClick = (path: string) => {
    router.push(path);
  };

  return (
    <header className="relative flex flex-col justify-between px-8 pt-10 pb-6 w-80 text-gray-900 font-extralight overflow-hidden">
      <ul className="flex w-full gap-4">
        {navigations.map((nav) => (
          <li
            key={nav.name}
            className="flex items-center justify-center h-10 p-2 cursor-pointer border-solid hover:border-b border-black"
            onClick={() => handleNavClick(nav.href)}
          >
            {nav.name}
          </li>
        ))}
      </ul>

      <h1 className="text-9xl font-bold -rotate-45 scale-150">ZIMI</h1>

      <div className="flex gap-3">
        {socialNetworks.map((socialNetwork) => (
          <Link
            target="_blank"
            href={socialNetwork.href}
            key={socialNetwork.name}
          >
            <button className="p2 text-2xl hover:scale-105">
              {socialNetwork.element}
            </button>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;

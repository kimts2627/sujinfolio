"use client";

import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const navigations = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Gallery", href: "/gallery" },
  ];

  const handleNavClick = (path: string) => {
    router.push(path);
  };

  return (
    <header className="flex justify-between px-8 pt-10 pb-6 text-gray-200">
      <ul className="flex w-full gap-4">
        {navigations.map((nav) => (
          <li
            key={nav.name}
            className="flex items-center justify-center h-10 p-2 cursor-pointer"
            onClick={() => handleNavClick(nav.href)}
          >
            {nav.name}
          </li>
        ))}
      </ul>

      <button></button>
    </header>
  );
};

export default Header;

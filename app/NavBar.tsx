"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const NavBar = () => {
  const currrentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex items-center space-x-6 h-14 px-5 border-b mb-5">
      <Link href="/">
        <AiFillBug />
      </Link>

      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
              "text-zinc-900": currrentPath === link.href, // { classes : conditions }
              "text-zinc-500": currrentPath !== link.href,
              "transition-color hover:text-zinc-800": true, // If true, render this classes at all times
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
"use client";
import {useSession} from "next-auth/react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";
import { Box } from "@radix-ui/themes";

const NavBar = () => {
  const currrentPath = usePathname();
  const { status, data:session } = useSession()

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className="flex items-center space-x-6 h-14 px-5 border-b mb-5">
      <Link href="/">
        <AiFillBug />
      </Link>

      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link      
              href={link.href}
              className={classnames({
                "text-zinc-900": currrentPath === link.href, // { classes : conditions }
                "text-zinc-500": currrentPath !== link.href,
                "transition-color hover:text-zinc-800": true, // If true, render this classes at all times
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        { status === "authenticated" && <Link href="/api/auth/signout">Log out</Link> }
        { status === "unauthenticated" && <Link href="/api/auth/signin">Log in</Link> }
      </Box>
    </nav>
  );
};

export default NavBar;

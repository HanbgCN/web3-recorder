"use client";

import { ArrowUpRight, At } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkProps {
  label: string;
  href: string;
  icon?: JSX.Element;
}

export const NavLink = ({ label, href, icon }: NavLinkProps) => {
  const pathname = usePathname();
  const iconCom = icon ? icon : <At size={16} />;

  const isInternal = href.startsWith("/");
  if (!isInternal) {
    return (
      <a
        key={href}
        href={href}
        target="_blank"
        className="p-3 rounded-md hover:bg-gray-300 "
      >
        <span className="flex gap-2 items-center text-base">
          {iconCom}
          {label}
        </span>
      </a>
    );
  }

  let isActive = false;
  if (pathname?.length > 0) {
    const hrefPathname = href.split("?")[0];
    isActive = hrefPathname === pathname;
  }

  return (
    <Link
      key={href}
      href={href}
      className={`p-3 rounded-md ${
        isActive ? "bg-zinc-700 text-white" : "hover:bg-gray-300"
      }`}
    >
      <span className="flex items-center text-base gap-2">
        {iconCom} <span>{label}</span>
      </span>
    </Link>
  );
};

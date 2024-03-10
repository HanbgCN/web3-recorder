"use client";

import { NavLink } from "@/components/nav-link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LINKS, PROFILES } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";

export interface SiderbarProps {
  href?: string;
}

export const SiderBar = ({ href }: SiderbarProps) => {
  return (
    <div className="scrollable-area flex flex-col w-full text-sm bg-zinc-100">
      <div className="flex flex-col gap-4 p-4">
        <Link
          href="/"
          className="link-card inline-flex items-center gap-2 p-4 py-6"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/31720493?v=4"
            alt="avatar"
            width={60}
            height={60}
            className="rounded-full border shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight">
              韩金泽 🐁
            </span>
            <span className="text-muted-foreground">Fullstack Developer</span>
            <span className="text-muted-foreground">Web3 OG </span>
          </div>
        </Link>
        <div className="flex flex-col gap-2">
          {LINKS.map(({ href, label, icon }) => (
            <NavLink key={href} href={href} label={label} icon={icon} />
          ))}
        </div>
        <Separator className="my-4" />
        <div className="flex flex-row gap-4 justify-center">
          {PROFILES.map(({ title, url, icon }) => (
            <Button
              key={title}
              size="icon"
              variant="secondary"
              aria-label={title}
              className="rounded-full bg-zinc-200 hover:bg-zinc-300"
              onClick={() => window.open(url)}
            >
              {icon}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

"use client";

import Link from "next/link";
import { NavLink } from "@/components/nav-link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { LINKS, PROFILES } from "@/lib/config";
import Image from "next/image";
import { useContext } from "react";
import { MenuDrawerContext } from "@/components/mobile-drawer";

export const MenuBar = (): React.ReactNode => {
  const { setOpen } = useContext(MenuDrawerContext);

  return (
    <div className="flex-1 overflow-hidden flex flex-col gap-4 text-sm py-4">
      <Link
        href="/"
        className="link-card inline-flex items-center gap-2 p-4 mx-4"
        onClick={() => setOpen(false)}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/31720493?v=4"
          alt="avatar"
          width={60}
          height={60}
          className="rounded-full border shadow-sm"
        />
        <div className="flex flex-col">
          <span className="font-bold text-base tracking-tight">韩金泽 🐁</span>
          <span className="text-muted-foreground">Fullstack Developer</span>
          <span className="text-muted-foreground">Crypto & Web3 OG </span>
        </div>
      </Link>
      <ScrollArea className="flex-1 px-4">
        <div className="flex flex-col gap-2">
          {LINKS.map(({ href, label, icon }) => (
            <NavLink key={href} href={href} label={label} icon={icon} />
          ))}
        </div>
      </ScrollArea>
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
  );
};

"use client";

import { Button } from "@/components/ui/button";
import { DiscordLogo, Globe, TwitterLogo } from "@phosphor-icons/react";

type SocialLinkerProps = {
  name: "twitter" | "website" | "discord";
  linker: string;
};

export const SocialLinker = ({ name, linker }: SocialLinkerProps) => {
  return (
    <Button asChild variant="ghost">
      <a
        href={linker}
        target="_blank"
        className="flex gap-2 text-blue-500 hover:text-blue-400 hover:bg-blue-50"
      >
        {(() => {
          switch (name) {
            case "twitter":
              return (
                <>
                  <TwitterLogo size={20} />X (Twitter)
                </>
              );
            case "website":
              return (
                <>
                  <Globe size={20} />
                  Website
                </>
              );
            case "discord":
              return (
                <>
                  <DiscordLogo size={20} />
                  Discord
                </>
              );
          }
        })()}
      </a>
    </Button>
  );
};

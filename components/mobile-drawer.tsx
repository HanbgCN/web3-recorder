"use client";

import { Drawer } from "vaul";
import { Button } from "@/components/ui/button";
import { Command } from "@phosphor-icons/react";
import { MenuBar } from "@/components/menu-bar";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface MobileDrawerContextInterface {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuDrawerContext = createContext<MobileDrawerContextInterface>(
  {} as MobileDrawerContextInterface
);

export function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root shouldScaleBackground open={open} onOpenChange={setOpen}>
      <Button variant="ghost" size="icon" title="Toggle drawer" asChild>
        <Drawer.Trigger>
          <Command size={20} />
        </Drawer.Trigger>
      </Button>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="fixed bottom-0 left-0 right-0 flex flex-col rounded-t-lg bg-white
        "
        >
          <div className="p-4 flex flex-col relative max-h-[80vh]">
            <div className="flex-shrink-0 self-center bg-zinc-200 h-2 w-12 rounded" />
            <MenuDrawerContext.Provider value={{ setOpen }}>
              <MenuBar />
            </MenuDrawerContext.Provider>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

import { MenuBar } from "@/components/menu-bar";

export const SiderBar = () => {
  return (
    <div className="hidden lg:block h-screen overflow-hidden bg-zinc-100">
      <MenuBar />
    </div>
  );
};

import { MenuBar } from "@/components/menu-bar";

export const SiderBar = () => {
  return (
    <div className="hidden lg:flex lg:flex-col h-screen bg-zinc-100">
      <MenuBar />
    </div>
  );
};

import { MobileDrawer } from "@/components/mobile-drawer";
export interface FloatingHeaderProps {
  scrollTitle?: string;
  title?: string;
  goBackLink?: string;
  children?: React.ReactNode;
}

export const NavHeader = () => {
  return (
    <header className="border-zinc-200 border-b px-4 py-2 lg:hidden">
      <MobileDrawer />
    </header>
  );
};

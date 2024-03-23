import { Separator } from "@/components/ui/separator";

export const Overline = () => {
  return (
    <div className="lg:w-[75%] flex flex-col gap-8 items-center py-20">
      <Separator />
      <p className="text-muted-foreground">over.</p>
    </div>
  );
};

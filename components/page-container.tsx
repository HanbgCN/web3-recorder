import { cn } from "@/lib/utils";

export interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="container lg:max-w-5xl min-h-screen max-w-[100vw] flex flex-col px-8 lg:py-24 py-8 gap-4">
      {children}
    </div>
  );
}

export interface PageHeaderProps {
  heading: string;
  status?: string;
  StatusColor?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  heading,
  status,
  StatusColor,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <header
      className={cn("flex flex-row justify-between items-center", className)}
    >
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">
          <span>{heading}</span>
          {status && <span className={`text-[#f90]`}>{status}</span>}
        </h1>
        <p className="text-muted-foreground text-wrap">{description}</p>
      </div>

      {children}
    </header>
  );
}

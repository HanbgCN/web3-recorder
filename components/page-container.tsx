export interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="container lg:max-w-5xl min-h-screen max-w-[100vw] flex flex-col px-4 lg:py-24 py-8 gap-4">
      {children}
    </div>
  );
}

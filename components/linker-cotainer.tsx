type LinkerContainerProps = {
  topic?: string;
  children?: React.ReactNode;
};

export const LinkerContainer = ({ topic, children }: LinkerContainerProps) => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap lg:items-center gap-2">
      {topic && <span className="text-muted-foreground">{topic}</span>}
      {children}
    </div>
  );
};

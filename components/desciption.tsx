type DesciptionProps = {
  desciption?: string;
  children?: React.ReactNode;
};

export const Description = ({ desciption, children }: DesciptionProps) => {
  if (children) return <div className="text-muted-foreground">{children}</div>;

  return <p className="text-muted-foreground">{desciption}</p>;
};

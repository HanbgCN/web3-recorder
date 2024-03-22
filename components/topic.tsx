import React from "react";

type TopicProps = {
  topic: string;
  children?: React.ReactNode;
};

export const Topic = ({ topic, children }: TopicProps) => {
  return (
    <div className="flex gap-2 items-baseline">
      <p className="text-2xl font-bold">{topic}</p>
      {children}
    </div>
  );
};

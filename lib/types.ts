export type InvestData = {
  type: string;
  invest: string;
  value: string;
  status: "ongoing" | "sellback";
  time?: string;
};

export type ProfitData = {
  type: string;
  reward: string;
  status: "holding" | "sold";
  value: string;
};

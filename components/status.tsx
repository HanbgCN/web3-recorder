import { Badge } from "@/components/ui/badge";

type StatusType = "ongoing" | "finished" | "counting";
type StatusProps = {
  status: StatusType;
  marker?: string;
};

const variantMap = (status: StatusType) => {
  switch (status) {
    case "ongoing":
      return "secondary";
    case "finished":
      return "secondary";
    case "counting":
      return "outline";
  }
};

const classMap = (status: StatusType) => {
  switch (status) {
    case "ongoing":
      return "font-bold text-green-500 bg-green-200";
    case "finished":
      return "text-gray-500 bg-gray-200";
    case "counting":
      return "font-bold text-amber-500 border-amber-500";
  }
};

export const Status = ({ status, marker }: StatusProps) => {
  return (
    <Badge variant={variantMap(status)} className={classMap(status)}>
      {marker || status}
    </Badge>
  );
};

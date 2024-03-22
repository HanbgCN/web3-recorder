import { Badge } from "@/components/ui/badge";

type StatusType = "ongoing" | "finished" | "counting";
type StatusProps = {
  status: StatusType;
  marker?: string;
};

const variantMap = (status: StatusType) => {
  switch (status) {
    case "ongoing":
      return "default";
    case "finished":
      return "secondary";
    case "counting":
    default:
      return "outline";
  }
};

const classMap = (status: StatusType) => {
  switch (status) {
    case "ongoing":
      return "text-blue-200";
    case "finished":
      return "text-secondary";
    case "counting":
    default:
      return "text-foreground";
  }
};

export const Status = ({ status, marker }: StatusProps) => {
  return (
    <Badge variant={variantMap(status)} className={classMap(status)}>
      {marker || status}
    </Badge>
  );
};

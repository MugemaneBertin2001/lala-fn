import { Badge } from "@/components/ui/badge";
import { Check, Home } from "lucide-react";

export const PropertyStatusBadge = ({ status }:any) => (
  <Badge
    variant={status === "occupied" ? "success" : "default"}
    className="flex items-center gap-1 w-fit"
  >
    {status === "occupied" ? (
      <Check className="h-3 w-3" />
    ) : (
      <Home className="h-3 w-3" />
    )}
    {status}
  </Badge>
);

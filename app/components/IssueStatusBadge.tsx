import React from "react";
import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

// interface Props {
//   status: Status;
// }

// Record is one of the utility types in typescript that allows us to defined key value paris.

const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;

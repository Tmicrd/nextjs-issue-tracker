import React from "react";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex align="center" gap="3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.description}</Text>
      </Flex>
      <Card>
        <p>{issue.createdAt.toDateString()}</p>
      </Card>
    </div>
  );
};

export default IssueDetailPage;

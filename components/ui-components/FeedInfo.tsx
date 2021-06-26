import { VStack, StackDivider } from "@chakra-ui/react";
import React from "react";
import { Feed as FeedType } from "../../types";
import { Feed } from "./Feed";

interface FeedInfoProps {
  feeds: FeedType[];
}

export const FeedInfo: React.FC<FeedInfoProps> = ({ feeds }) => {
  return (
    <VStack
      w="100%"
      divider={<StackDivider borderColor="whiteAlpha.300" />}
      maxHeight="500px"
      overflowY="scroll"
      px={8}
      py={4}
    >
      {feeds.map((f) => (
        <Feed iconSize={6} fullWidth key={f.timeStamp} feed={f} />
      ))}
    </VStack>
  );
};

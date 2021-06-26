import { Flex } from "@chakra-ui/react";
import React from "react";
import { Feeds } from "../constants";
import { CardItem } from "./ui-components/CardItem";
import { FeedInfo } from "./ui-components/FeedInfo";

interface FeedSectionProps {}

export const FeedSection: React.FC<FeedSectionProps> = ({}) => {
  return (
    <Flex w="100%">
      <CardItem
        cardTitle="Feed"
        cardBody={<FeedInfo feeds={Feeds} />}
        variant="One-column"
      />
    </Flex>
  );
};

import { Flex } from "@chakra-ui/react";
import React from "react";
import { FeedSection } from "./FeedSection";
import { MessageSection } from "./MessageSection";
import { PersonalSection } from "./PersonalSection";

interface InfoPanelProps {}

export const InfoPanel: React.FC<InfoPanelProps> = ({}) => {
  return (
    <Flex
      my={{ base: 2, xl: 16 }}
      ml={{ base: 0, xl: 8 }}
      w={{ base: "100%", xl: "calc(100% - 400px)" }}
      direction="column"
    >
      <PersonalSection />
      <MessageSection />
      <FeedSection />
    </Flex>
  );
};

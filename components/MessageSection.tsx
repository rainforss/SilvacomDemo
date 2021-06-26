import { Flex } from "@chakra-ui/react";
import React from "react";
import { CgAddR } from "react-icons/cg";
import { Messages } from "../constants";
import { CardItem } from "./ui-components/CardItem";
import { MessageInfo } from "./ui-components/MessageInfo";

interface MessageSectionProps {}

export const MessageSection: React.FC<MessageSectionProps> = ({}) => {
  return (
    <Flex w="100%" mb={{ base: 2, xl: 8 }}>
      <CardItem
        icon={CgAddR}
        cardTitle="Messages"
        cardBody={<MessageInfo messages={Messages} />}
        variant="One-column"
      />
    </Flex>
  );
};

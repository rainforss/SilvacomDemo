import { VStack, StackDivider } from "@chakra-ui/react";
import React from "react";
import { Message as MessageType } from "../../types";
import { Message } from "./Message";

interface MessageInfoProps {
  messages: MessageType[];
}

export const MessageInfo: React.FC<MessageInfoProps> = ({ messages }) => {
  return (
    <VStack
      w="100%"
      divider={<StackDivider borderColor="whiteAlpha.300" />}
      px={8}
      py={4}
    >
      {messages.map((m) => (
        <Message fullWidth key={m.timeStamp} message={m} />
      ))}
    </VStack>
  );
};

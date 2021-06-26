import {
  VStack,
  StackDivider,
  Flex,
  AvatarGroup,
  Avatar,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Message as MessageType, Participant } from "../../types";

interface MessageProps {
  fullWidth?: boolean;
  message: MessageType;
}

export const Message: React.FC<MessageProps> = ({ fullWidth, message }) => {
  return (
    <Flex
      minWidth={fullWidth ? "100%" : "max-content"}
      align="center"
      justifyContent="flex-start"
      my={2}
    >
      <AvatarGroup
        justifyContent="center"
        max={2}
        spacing={-3}
        minWidth="150px"
      >
        {message.participants.map((p, index) => (
          <Avatar key={index} name={p.name} src={p.pictureSrc} />
        ))}
      </AvatarGroup>
      <Flex
        direction="column"
        justifyContent="center"
        align="flex-start"
        color="whiteAlpha.600"
      >
        <Text as="small">{message.timeStamp}</Text>
        <Text as="p" fontSize="0.9rem">
          {message.content}
        </Text>
      </Flex>
    </Flex>
  );
};

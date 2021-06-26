import { Icon } from "@chakra-ui/icons";
import { Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Feed as FeedType } from "../../types";

interface FeedProps {
  feed: FeedType;
  fullWidth?: boolean;
  iconSize?: number;
}

export const Feed: React.FC<FeedProps> = ({ feed, fullWidth, iconSize }) => {
  return (
    <Flex
      minWidth={fullWidth ? "100%" : "max-content"}
      align="center"
      justifyContent="flex-start"
      my={2}
    >
      <Icon
        w={iconSize || 12}
        h={iconSize || 12}
        as={feed.icon}
        color="whiteAlpha.600"
        mr={8}
      />
      <Flex
        direction="column"
        justifyContent="center"
        align="flex-start"
        color="whiteAlpha.600"
      >
        <Text as="small">{feed.timeStamp}</Text>
        <Flex my={2}>
          {feed.pictureSrc && (
            <Img
              boxSize="150px"
              objectFit="cover"
              src={feed.pictureSrc}
              mr={4}
            />
          )}
          <Text as="p" fontSize="0.9rem">
            {feed.text}
          </Text>
        </Flex>

        <Text as="small">{feed.subtext}</Text>
      </Flex>
    </Flex>
  );
};

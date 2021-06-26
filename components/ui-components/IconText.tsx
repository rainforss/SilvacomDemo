import { Icon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { MdSettings } from "react-icons/md";
import { IconTextSet } from "../../types";

interface IconTextProps {
  iconTextSets: IconTextSet[];
  align: "flex-start" | "flex-end" | "center";
  fullWidth: boolean;
  iconSize?: number;
}

export const IconText: React.FC<IconTextProps> = ({
  iconTextSets,
  align,
  fullWidth,
  iconSize,
}) => {
  return (
    <Flex
      minWidth={fullWidth ? "100%" : "max-content"}
      direction="column"
      justifyContent="center"
      align={align}
    >
      {iconTextSets.map((i) => (
        <Flex
          my={2}
          w="100%"
          key={i.text[0]}
          justifyContent="center"
          align="center"
          color="whiteAlpha.600"
        >
          <Icon
            as={i.icon}
            w={iconSize || 12}
            h={iconSize || 12}
            mr={6}
            strokeWidth="0"
          />
          <Box w="80%">
            {i.text.map((t) => (
              <Text fontSize="0.9rem" key={t} wordBreak="break-word">
                {t}
              </Text>
            ))}
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

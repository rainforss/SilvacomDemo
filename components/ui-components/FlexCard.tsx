import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { BiEdit } from "react-icons/bi";
import { FlexCardBodyProps } from "./FlexCardBody";
import { FlexCardTitleProps } from "./FlexCardTitle";

interface FlexCardProps {
  children: ReactNode;
  w: object;
}

export const FlexCard: React.FC<FlexCardProps> = ({ children, w }) => {
  return (
    <Flex my={4} w={w} borderRadius="1.5rem" direction="column">
      {children}
    </Flex>
  );
};

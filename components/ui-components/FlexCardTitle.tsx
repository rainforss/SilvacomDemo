import { Box, Flex, Heading, Icon, IconButton } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";
import { BiEdit } from "react-icons/bi";
import { IconType } from "react-icons/lib";

export interface FlexCardTitleProps {
  children: ReactNode;
  icon?: IconType;
}

export const FlexCardTitle: React.FC<FlexCardTitleProps> = ({
  children,
  icon,
}) => {
  return (
    <Flex
      justifyContent="space-between"
      align="center"
      bg="heading.100"
      borderRadius="1.5rem 1.5rem 0 0"
      px={4}
      py={1}
      minHeight="50px"
    >
      <Heading as="h4" fontSize="1.2rem">
        {children}
      </Heading>
      {icon ? (
        <IconButton
          bg="transparent"
          fontSize="1.5rem"
          aria-label="Edit"
          borderRadius="50%"
          _hover={{ bg: "inherit" }}
          icon={<Icon as={icon} />}
        />
      ) : (
        <Box></Box>
      )}
    </Flex>
  );
};

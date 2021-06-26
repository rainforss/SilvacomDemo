import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import { NavLinks } from "../constants";
import { NavMenu } from "./ui-components/NavMenu";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <Box bg="heading.100" py={2} position="relative">
        <Heading as="h1" fontSize="3rem" textAlign="center">
          IN TOUCH
        </Heading>
        <NavMenu
          bg="transparent"
          position="absolute"
          top="50%"
          right="2rem"
          borderRadius="50%"
          transform="translateY(-50%)"
          navLinks={NavLinks}
        />
      </Box>
    </header>
  );
};

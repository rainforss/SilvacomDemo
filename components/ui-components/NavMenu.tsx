import { CloseIcon, HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Button,
  ChakraProps,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "../../types";

interface NavMenuProps extends ChakraProps {
  navLinks: NavLink[];
}

export const NavMenu: React.FC<NavMenuProps> = (props: NavMenuProps) => {
  const { navLinks, ...chakraProps } = props;
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            {...chakraProps}
            as={IconButton}
            icon={isOpen ? <SmallCloseIcon /> : <HamburgerIcon />}
          />
          <MenuList
            bg="body.100"
            borderRadius="1rem"
            minWidth="max-content"
            px="1rem"
            textAlign="center"
          >
            {navLinks.map((link) => (
              <MenuItem
                _hover={{ bg: "inherit", transform: "scale(1.2,1.2)" }}
                _focus={{ bg: "inherit" }}
                color="whiteAlpha.600"
                key={link.url}
                justifyContent="center"
              >
                {link.text}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

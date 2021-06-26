import { Box, ChakraProps, Img } from "@chakra-ui/react";
import React from "react";

interface DecorProps extends ChakraProps {}

export const Decor: React.FC<DecorProps> = ({ ...chakraProps }) => {
  return (
    <Img {...chakraProps} position="absolute" src="/assets/gradient.svg" />
  );
};

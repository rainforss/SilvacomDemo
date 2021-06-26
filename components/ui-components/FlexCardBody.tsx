import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export interface FlexCardBodyProps {
  children: ReactNode;
}

export const FlexCardBody: React.FC<FlexCardBodyProps> = ({ children }) => {
  return (
    <Box flexGrow={2} bg="body.100" borderRadius="0 0 1.5rem 1.5rem">
      {children}
    </Box>
  );
};

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Decor } from "../components/ui-components/Decor";
import { Header } from "../components/Header";
import { InfoPanel } from "../components/InfoPanel";
import { ProfileSection } from "../components/ProfileSection";

export default function Home() {
  return (
    <Box bg="#212529" position="relative">
      <Header />
      <Decor
        w="700px"
        h="700px"
        top="0"
        left="0"
        zIndex="0"
        transform="translate(-50%,-20%)"
      />
      <Decor
        w="700px"
        h="700px"
        top="50%"
        right="0"
        zIndex="0"
        transform="translate(50%,-50%)"
      />
      <Flex
        w="90%"
        mx="auto"
        justifyContent="space-between"
        position="relative"
        zIndex="1"
        align={{ base: "center", xl: "initial" }}
        direction={{ base: "column", xl: "row" }}
      >
        <ProfileSection />
        <InfoPanel />
      </Flex>
    </Box>
  );
}

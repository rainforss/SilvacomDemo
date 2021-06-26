import { Avatar, Flex } from "@chakra-ui/react";
import React from "react";
import { ProfileInfo } from "../constants";
import { IconText } from "./ui-components/IconText";

interface ProfileSectionProps {}

export const ProfileSection: React.FC<ProfileSectionProps> = ({}) => {
  return (
    <Flex my={{ base: 8, xl: 16 }} w="300px" direction="column" align="center">
      <Avatar mb={4} w="100%" h="300px" src="/assets/photos/Profile 7.jpg" />
      <IconText fullWidth={false} align="center" iconTextSets={ProfileInfo} />
    </Flex>
  );
};

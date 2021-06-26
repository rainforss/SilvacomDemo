import { AddIcon, Icon } from "@chakra-ui/icons";
import { VStack, StackDivider } from "@chakra-ui/react";
import React from "react";
import { IconTextSet } from "../../types";
import { IconText } from "./IconText";
import { CgAddR } from "react-icons/cg";

interface SocialInfoProps {
  socialInfoSet: Array<IconTextSet[]>;
}

export const SocialInfo: React.FC<SocialInfoProps> = ({ socialInfoSet }) => {
  return (
    <VStack
      divider={<StackDivider borderColor="whiteAlpha.300" />}
      px={8}
      py={4}
    >
      {socialInfoSet.map((s) => (
        <IconText
          key={s[0].text[0]}
          iconSize={6}
          fullWidth
          align="flex-start"
          iconTextSets={s}
        />
      ))}
      <Icon
        cursor="pointer"
        my={4}
        as={CgAddR}
        color="heading.100"
        fontSize="1.5rem"
      />
    </VStack>
  );
};

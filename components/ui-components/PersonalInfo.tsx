import { StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { IconTextSet } from "../../types";
import { IconText } from "./IconText";

interface PersonalInfoProps {
  emailInfo: IconTextSet[];
  phoneInfo: IconTextSet[];
  addressInfo: IconTextSet[];
  birthInfo: IconTextSet[];
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  emailInfo,
  phoneInfo,
  addressInfo,
  birthInfo,
}) => {
  return (
    <VStack
      divider={<StackDivider borderColor="whiteAlpha.300" />}
      px={8}
      py={4}
    >
      <IconText
        iconSize={6}
        fullWidth
        align="flex-start"
        iconTextSets={emailInfo}
      />
      <IconText
        iconSize={6}
        fullWidth
        align="flex-start"
        iconTextSets={phoneInfo}
      />
      <IconText
        iconSize={6}
        fullWidth
        align="flex-start"
        iconTextSets={addressInfo}
      />
      <IconText
        iconSize={6}
        fullWidth
        align="flex-start"
        iconTextSets={birthInfo}
      />
    </VStack>
  );
};

import { Flex } from "@chakra-ui/react";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import {
  EmailInfo,
  PhoneInfo,
  AddressInfo,
  BirthInfo,
  SocialInfoSet,
} from "../constants";
import { CardItem } from "./ui-components/CardItem";
import { PersonalInfo } from "./ui-components/PersonalInfo";
import { SocialInfo } from "./ui-components/SocialInfo";

interface PersonalSectionProps {}

export const PersonalSection: React.FC<PersonalSectionProps> = ({}) => {
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      direction={{ base: "column", lg: "row" }}
      align={{ base: "center", lg: "stretch" }}
      mb={{ base: 2, xl: 8 }}
    >
      <CardItem
        icon={BiEdit}
        cardTitle="Ellie Jordan"
        cardBody={
          <PersonalInfo
            emailInfo={EmailInfo}
            phoneInfo={PhoneInfo}
            addressInfo={AddressInfo}
            birthInfo={BirthInfo}
          />
        }
        variant="Two-column"
      />
      <CardItem
        icon={AiFillCheckCircle}
        cardTitle="Socials"
        cardBody={<SocialInfo socialInfoSet={SocialInfoSet} />}
        variant="Two-column"
      />
    </Flex>
  );
};

import React, { ReactComponentElement, ReactNode } from "react";
import { IconType } from "react-icons";
import { BiEditAlt } from "react-icons/bi";
import { FlexCard } from "./FlexCard";
import { FlexCardBody } from "./FlexCardBody";
import { FlexCardTitle } from "./FlexCardTitle";

interface CardItemProps {
  cardTitle: string;
  icon?: IconType;
  cardBody: ReactNode;
  variant: "One-column" | "Two-column";
}

export const CardItem: React.FC<CardItemProps> = ({
  cardTitle,
  cardBody,
  icon,
  variant,
}) => {
  return (
    <FlexCard
      w={
        variant === "One-column"
          ? { base: "100%", lg: "100%" }
          : { base: "100%", lg: "48%" }
      }
    >
      <FlexCardTitle icon={icon}>{cardTitle}</FlexCardTitle>
      <FlexCardBody>{cardBody}</FlexCardBody>
    </FlexCard>
  );
};

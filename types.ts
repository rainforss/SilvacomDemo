import { IconType } from "react-icons";

export type NavLink = {
  text: string;
  url: string;
};

export type IconTextSet = {
  icon: IconType;
  text: string[];
};

export type Email = {
  type: string;
  address: string;
};

export type Phone = {
  type: string;
  number: string;
};

export type Participant = {
  name: string;
  pictureSrc: string;
};

export type Message = {
  participants: Participant[];
  timeStamp: string;
  content: string;
};

export type Feed = {
  icon: IconType;
  timeStamp: string;
  text: string;
  subtext: string;
  pictureSrc: string;
};

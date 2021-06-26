import { Feed, IconTextSet, Message, NavLink } from "./types";
import { HiOutlineMusicNote } from "react-icons/hi";
import { FaFlagCheckered, FaCubes } from "react-icons/fa";
import { BiBeer, BiGift, BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitch,
  IoLogoTwitter,
} from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";

export const NavLinks: NavLink[] = [
  { text: "My Profile", url: "/My Profile" },
  { text: "Setting", url: "/Setting" },
  { text: "Privacy", url: "/Privacy" },
  { text: "Logout", url: "/Logout" },
];

export const ProfileInfo: IconTextSet[] = [
  {
    icon: HiOutlineMusicNote,
    text: [
      "The Deep South",
      "Josh Ritter",
      "Rag'n'Bone Man",
      "Imagine Dragons",
      "Aubrey Logan",
    ],
  },
  {
    icon: FaFlagCheckered,
    text: [
      "Le Canoe Volant",
      "The Fringe",
      "Heritage Days",
      "Board Games",
      "Ski Trips",
    ],
  },
  {
    icon: BiBeer,
    text: [
      "Micro Breweries",
      "Next Act",
      "Sushi",
      "Ice Cream",
      "Overly Fancy Cupcakes",
    ],
  },
];

export const EmailInfo: IconTextSet[] = [
  {
    icon: AiOutlineMail,
    text: ["Personal", "elliej@email.com"],
  },
  {
    icon: AiOutlineMail,
    text: ["Freelance", "elliej.@engage.com"],
  },
];

export const PhoneInfo: IconTextSet[] = [
  {
    icon: BiPhone,
    text: ["Work", "780-999-9996"],
  },
  {
    icon: BiPhone,
    text: ["Mobile", "780-555-7894"],
  },
];

export const AddressInfo: IconTextSet[] = [
  {
    icon: BsHouseDoor,
    text: ["8536 Clover Crescent", "Edmonton", "Alberta", "T4G 9F2"],
  },
];

export const BirthInfo: IconTextSet[] = [
  { icon: BiGift, text: ["January 29"] },
];

export const SocialInfoSet: Array<IconTextSet[]> = [
  [{ icon: IoLogoTiktok, text: ["@EllieJplanning"] }],
  [{ icon: IoLogoFacebook, text: ["www.facebook.com/EllieJordan43"] }],
  [{ icon: IoLogoInstagram, text: ["@itsaplann"] }],
  [{ icon: IoLogoTwitch, text: ["@itsaplann"] }],
  [{ icon: IoLogoTwitter, text: ["@itsaplann"] }],
  [{ icon: FaCubes, text: ["www.EllieJordan.ca"] }],
];

export const Messages: Message[] = [
  {
    participants: [{ name: "1", pictureSrc: "/assets/photos/Profile 2.jpg" }],
    timeStamp: "June 9 at 7:08pm",
    content:
      "Yeah that sounds great, want to grab drinks tonight? I'm free after work. Why don't you give me a call when you are done and we can meet up at the Market? I think it's wings night and I would be totally down for some food!",
  },
  {
    participants: [
      { name: "1", pictureSrc: "/assets/photos/Profile 8.jpg" },
      { name: "2", pictureSrc: "/assets/photos/Profile 15.jpg" },
      { name: "3", pictureSrc: "/assets/photos/Profile 2.jpg" },
      { name: "4", pictureSrc: "/assets/photos/Profile 2.jpg" },
    ],
    timeStamp: "May 18 at 3:21pm",
    content:
      "I got tickets! We are good to go, second balcony but at least we are going! It's going to be epic. Usual place for dinner first? I need me some pizza!",
  },
];

export const Feeds: Feed[] = [
  {
    icon: IoLogoTiktok,
    text: "Posted on TikTok",
    subtext: "",
    timeStamp: "Today at 3:21pm",
    pictureSrc: "/assets/photos/pexels-photo-6898856.jpeg",
  },
  {
    icon: IoLogoTwitch,
    text: "We're live! Join us for more ESO. Can i get past the character creation screen? Probably not!",
    subtext: "@istaplann was live for 3 hours and 54 minutes",
    timeStamp: "Yesterday at 6:57pm",
    pictureSrc: "",
  },
  {
    icon: IoLogoInstagram,
    text: "Cherry blossoms are in full bloom. They make the walk in to work a dream. #blessed #spring #cherryblossoms #flowers #bloom #healthyliving",
    subtext: "",
    timeStamp: "Monday at 7:19am",
    pictureSrc: "/assets/photos/pexels-photo-931181.jpeg",
  },
  {
    icon: IoLogoTwitter,
    text: "Why can't it be take your pet to work day every day? i mean come on, i could use cat snuggles right now.",
    subtext: "",
    timeStamp: "June 25 at 3:28pm",
    pictureSrc: "",
  },
];

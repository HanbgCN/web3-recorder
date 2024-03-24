import {
  BagSimple,
  House,
  Lightning,
  PiggyBank,
  TwitterLogo,
} from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

export const SCROLL_AREA_ID = "scroll-area";
export const MOBILE_SCROLL_THRESHOLD = 20;

export const LINKS = [
  {
    href: "/",
    label: "Home",
    icon: <House size={20} weight="duotone" />,
  },
  {
    href: "/bags",
    label: "Bags",
    icon: <BagSimple size={20} weight="duotone" />,
  },
  {
    href: "/pigmo",
    label: "Pigmo",
    icon: <PiggyBank size={20} weight="duotone" />,
  },
  // {
  //   href: "http://www.baidu.com",
  //   label: "百度",
  //   icon: <Link size={20} weight="duotone" />,
  // },
];

export const PROFILES = [
  {
    title: "X (Twitter)",
    username: "bghan20",
    url: "https://twitter.com/bghan20",
    icon: <TwitterLogo size={20} />,
  },
  {
    title: "Github",
    url: "https://github.com/HanbgCN",
    icon: <GithubLogo size={20} />,
  },
];

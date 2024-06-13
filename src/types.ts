import type { IconType } from "react-icons";

export type Project = {
  title: string,
  description: string,
  image: string,
  liveURL: string,
  code: string
}

export type Skill = {
  name: string,
  logo: IconType,
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}

export type Contact = {
  platform: string,
  name: string,
  icon: IconType,
  link: string
}
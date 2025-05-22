import { StaticImageData } from "next/image";

export interface MissionStatement {
  title: string;
  description: string;
}

export interface VisionStatement {
  title: string;
  description: string;
}

export interface stat {
  year: number;
  title: string;
  total: number;
  totalpeople: string;
  platforms: string;
  platformuser: string;
  creator: string;
  creatorname: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface coreValuesList {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface OurTeam {
  title: string;
  description: string;
}

export interface Team {
  image: string | StaticImageData;
  name: string;
  role: string;
  title: string;
  place: string;
  country: string;
}

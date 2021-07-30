import { User } from "schemas/src/user";

export enum KnownGearNames {
  // general
  HEAD_LAMP = "Head lamp",
  GPS = "GPS",
  // hiking & mountaineering
  FRAME_PACK = "Frame pack",
  HIKING_BOOTS = "Hiking boots",
  HIKING_POLES = "Hiking poles",
  // camping
  SLEEPING_BAG = "Sleeping bag",
  SLEEPING_PAD = "Sleeping pad",
  STOVE = "Stove",
  WATER_FILTER = "Water filter",
  WATER_TABLETS = "Water tablets",
  // winter sports
  SKIS = "Skis",
  SNOW_BOARD = "Snow board",
}

export interface Gear {
  name: KnownGearNames | string;
  trippeesWhoNeed: User[];
  type: "CLOTHING" | "FOOT_WEAR" | "GENERAL";
}
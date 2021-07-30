import { Gear } from "schemas/src/gear";

export interface GearRequest extends Request {
  type: "GROUP" | "INDIVIDUAL";
  gears: Gear[];
}

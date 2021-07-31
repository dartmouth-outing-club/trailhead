import { GroupGear, IndividualGear } from 'schemas/src/gear'
import { Request } from 'schemas/src/requests/request'

export type GroupGearRequest = {
  gears: Record<string, GroupGear>
} & Request

export type IndividualGearRequest = {
  gears: Record<string, IndividualGear>
} & Request

import { GroupGear, IndividualGear } from 'trailhead-namespaces/src/gear'
import { Request } from 'trailhead-namespaces/src/requests/request'

export type GroupGearRequest = {
  gears: Record<string, GroupGear>
} & Request

export type IndividualGearRequest = {
  gears: Record<string, IndividualGear>
} & Request

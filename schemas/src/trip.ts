import { GroupGearRequest, IndividualGearRequest } from './requests'

export interface Trip {
  individualGearRequest: GroupGearRequest
  groupGearRequest: IndividualGearRequest
}

import {
  GroupGearRequest,
  IndividualGearRequest,
  PCardRequest,
  VehicleRequest,
} from 'schemas/src/requests'
import Identifiable from 'schemas/src/identifiable'
import { Subclub } from 'schemas/src/subclub'
import { Leader, OPO, User } from 'schemas/src/user'
import { IndividualGear } from './gear'
import { KnownLocations } from './location'

export interface Attendee {
  role: 'LEADER' | 'TRIPPEE'
  user: User
  attended: boolean
  requestedGear: IndividualGear[]
}

export interface Waitlistee {
  user: User
  position: number
  requestedGear: IndividualGear[]
}

export interface Trip extends Identifiable {
  number: number
  title: number
  subclub: Subclub
  startDate: Date
  endDate: Date
  location: KnownLocations | string
  pickup: 'Robo' | string
  dropoff: 'Robo' | string
  cost: number
  needExperience: boolean
  description: string
  published: boolean

  left: boolean
  returned: boolean
  late: boolean

  creator: User
  attendees: Attendee[]
  waitlistees: Waitlistee[]

  individualGearRequest: GroupGearRequest
  groupGearRequest: IndividualGearRequest
  pCardRequest: PCardRequest
  vehicleRequests: VehicleRequest[]
}
